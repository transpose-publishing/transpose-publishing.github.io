import React, {useState, useEffect, useRef} from 'react';
import {iconAssetPath, KEYCODE} from './constants';
import {useMergeState, useClickOutside, keyboardControls} from './utils';


export default function Search ({placeholder, searchTerm, setSearchTerm, loading, data}) {
  const [searchInputValue, setInputValue] = useState(searchTerm);
  const [{searchFocused, listItemFocused}, updateFocus] = useMergeState({searchFocused: false, listItemFocused: false});

  const searchContainerNode = useRef(null);
  const searchInputNode = useRef(null);
  const focusedItemNode = useRef(null);

  useClickOutside({
    container: searchContainerNode.current,
    handler: resetFocus,
    conditional: searchFocused === true,
    dependencies: [searchFocused]
  });

  useEffect(function onListFocusChange_focusItem() {
    if(listItemFocused !== false) {
      focusedItemNode.current.focus()
    }
  }, [listItemFocused]);

  function resetFocus() {
    updateFocus({searchFocused: false, listItemFocused: false})
  }

  function onInputFocus () {
    updateFocus({searchFocused: true, listItemFocused: false})
  }

  function selectSearchTerm (title) {
    setSearchTerm(title);
    setInputValue(title);
    resetFocus()
  }

  const keyDownHandler = keyboardControls({
    [KEYCODE.DOWN_ARROW]: (e) => {
      e.preventDefault();
      const suggestionsExist = document.getElementsByClassName("search-suggestion").length;
      const nextItem = focusedItemNode.current && focusedItemNode.current.nextSibling;
      if((listItemFocused === false && suggestionsExist) || nextItem) {
        updateFocus({listItemFocused: listItemFocused !== false ? listItemFocused + 1 : 0})
      }
    },
    [KEYCODE.UP_ARROW]: (e) => {
      if(listItemFocused !== false) {
        e.preventDefault();
        updateFocus({listItemFocused: listItemFocused > 0 ? listItemFocused - 1 : false});
        if(listItemFocused === 0) searchInputNode.current.focus();
      }
    },
    [KEYCODE.ENTER]: (e) => {
      if(listItemFocused !== false) {
        e.preventDefault();
        selectSearchTerm(e.target.innerHTML);
        resetFocus();
      } else {
        setSearchTerm(searchInputValue);
      }
    },
    [KEYCODE.TAB]: () => resetFocus()
  });

  return (
    <div id="search-container" ref={searchContainerNode}>
      <input
        id="search-input"
        ref={searchInputNode}
        type="text"
        placeholder={placeholder}
        value={searchInputValue}
        onFocus={onInputFocus}
        onKeyDown={keyDownHandler}
        onChange={e => setInputValue(e.target.value)}
        autoComplete="off"
      />

      <img className="search-glass" src={`./${iconAssetPath}/search-glass.png`}/>

      {/*results list turned off pending further discussion of how it would work*/}
      {false && !loading && searchInputValue.length > 2 && searchFocused &&
      <div className="search-suggestions">
        <ul>
          {data
            .filter( item => {
              return item.title.toLowerCase().indexOf(searchInputValue.toLowerCase()) > -1
            })
            .map( (item, index) =>
              <li
                key={`${item.title}-${item.publisher}-${Math.random()}`}
                className="search-suggestion"
                tabIndex={listItemFocused === index ? "0" : "-1"}
                ref={listItemFocused === index ? focusedItemNode : void 0}
                onClick={() => selectSearchTerm(item.title)}
                onKeyDown={keyDownHandler}
              >
                {item.title}
              </li>)}
        </ul>
      </div>}
    </div>
  )
}
