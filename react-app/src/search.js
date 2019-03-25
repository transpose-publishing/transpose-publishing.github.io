import React, {useState, useEffect, useRef} from 'react';
import {KEYCODE} from './constants';


export default function Search ({searchTerm, setSearchTerm, loading, data}) {
  const [searchInputValue, setInputValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [listItemFocused, setListFocus] = useState(false);

  const searchContainerNode = useRef(null);
  const searchInputNode = useRef(null);
  const focusedItemNode = useRef(null);

  useEffect(function onFocus_addClickOutsideListener() {
    if(searchFocused) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick)
  }, [searchFocused]);

  useEffect(function onMount_populateSearchTerm() {
    setInputValue(searchTerm);
  }, []);

  useEffect(function onListFocusChange_focusItem() {
    if(listItemFocused !== false) {
      focusedItemNode.current.focus()
    }
  }, [listItemFocused]);

  function handleClick (e) {
    const container = searchContainerNode.current;
    if(!container.contains(e.target)) {
      resetFocus();
    }
  }

  function resetFocus() {
    setListFocus(false);
    setSearchFocused(false);
  }

  function keyDownOnInput (e) {
    if(e.keyCode === KEYCODE.DOWN_ARROW) {
      const searchSuggestions = document.getElementsByClassName("search-suggestion");
      if(searchSuggestions.length) {
        setListFocus(0);
      }
    }
    if(e.keyCode === KEYCODE.TAB) {
      setSearchFocused(false);
    }
    if(e.keyCode === KEYCODE.ENTER) {
      setSearchTerm(searchInputValue);
    }
  }

  function keyDownOnListItem (e) {
    if(e.keyCode === KEYCODE.DOWN_ARROW) {
      e.preventDefault();
      const nextItem = focusedItemNode.current.nextSibling;
      if(nextItem) {
        setListFocus(listItemFocused + 1);
      }
    }
    if(e.keyCode === KEYCODE.UP_ARROW) {
      e.preventDefault();
      if(listItemFocused > 0) {
        setListFocus(listItemFocused - 1);
      } else if (listItemFocused === 0) {
        searchInputNode.current.focus()
      }
    }
    if(e.keyCode === KEYCODE.ENTER) {
      e.preventDefault();
      selectSearchTerm(e.target.innerHTML);
      resetFocus();
    }
    if(e.keyCode === KEYCODE.TAB) {
      resetFocus()
    }
  }

  function onInputFocus () {
    setSearchFocused(true);
    setListFocus(false);
  }

  function selectSearchTerm (title) {
    setSearchTerm(title);
    setInputValue(title);
    resetFocus()
  }

  return (
    <div id="search-container" ref={searchContainerNode}>
      <input
        id="search-input"
        ref={searchInputNode}
        type="text"
        placeholder="Search"
        value={searchInputValue}
        onFocus={onInputFocus}
        onKeyDown={keyDownOnInput}
        onChange={e => setInputValue(e.target.value)}
        autoComplete="off"
      />

      {!loading && searchInputValue.length > 2 && searchFocused &&
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
                onKeyDown={keyDownOnListItem}
              >
                {item.title}
              </li>)}
        </ul>
      </div>}
    </div>
  )
}
