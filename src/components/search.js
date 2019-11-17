import React, {useEffect, useLayoutEffect, useRef, useMemo} from 'react';
import {iconAssetPath, KEYCODE} from '../constants';
import {useMergeState, useClickOutside, useLayoutEffectOnUpdate, keyboardControls} from '../utils';


export default function Search ({placeholder, searchTerm, setSearchTerm, loading, data, urlSearchQuery}) {
  const [{inputValue, searchFocused, activeIndex}, setState] = useMergeState({
    inputValue: urlSearchQuery,
    searchFocused: false,
    activeIndex: null
  });

  const searchContainerNode = useRef(null);
  const searchSuggestionsNode = useRef(null);
  const activeSuggestionNode = useRef(null);
  const searchInputNode = useRef(null);

  useClickOutside({
    container: searchContainerNode,
    handler: resetFocus,
    addListenerConditional: searchFocused === true,
    dependencies: [searchFocused]
  });

  useLayoutEffect(function onActiveIndexChange_scrollToActiveSuggestion () {
    if(activeIndex !== null) {
      const containerHeight = 211;
      const suggestionHeight = 18;
      const suggestionMargin = 6;
      const offset = activeSuggestionNode.current.offsetTop;
      const scrollTop = searchSuggestionsNode.current.scrollTop;
      if(offset > containerHeight - suggestionHeight + scrollTop) {
        searchSuggestionsNode.current.scrollTop = offset + suggestionHeight + suggestionMargin - containerHeight
      } else if (scrollTop > offset) {
        searchSuggestionsNode.current.scrollTop = offset - suggestionMargin
      }
    }
  }, [activeIndex]);

  useEffect(function onSearchFocusedFalse_blurSearchInput () {
    if(!searchFocused) {
      searchInputNode.current.blur()
    }
  }, [searchFocused]);

  useLayoutEffectOnUpdate(function onUrlSearchQueryChange_updateSearchTerm () {
    setState({inputValue: urlSearchQuery});
    setSearchTerm(urlSearchQuery);
  }, [urlSearchQuery]);

  const searchSuggestions = useMemo(() => {
    if(!data || inputValue.length < 3) return [];
    const publishers = [];
    const titles = [];
    const publishersUsedIndex = [];
    const titlesUsedIndex = [];
    data.forEach( item => {
      const publisher = item.publisher.toLowerCase();
      const title = item.title.toLowerCase();
      const searchValue = inputValue.toLowerCase();
      if(publisher?.includes(searchValue) && !publishersUsedIndex.includes(publisher)) {
        publishers.push(item.publisher);
        publishersUsedIndex.push(publisher);
      }
      if(title?.includes(searchValue) && !titlesUsedIndex.includes(title)) {
        titles.push(item.title);
        titlesUsedIndex.push(title);
      }
    });
    return [...titles, ...publishers]
  }, [data, inputValue]);

  function onInputValueChange (e) {
    setState({inputValue: e.target.value, activeIndex: null});
  }

  function resetFocus() {
    setState({searchFocused: false, activeIndex: null})
  }

  function selectSearchTerm (title) {
    setSearchTerm(title);
    setState({inputValue: title, searchFocused: false, activeIndex: null})
  }

  const keyDownHandler = keyboardControls({
    [KEYCODE.DOWN_ARROW]: (e) => {
      if(searchSuggestions.length && (activeIndex === null || activeIndex + 1 !== searchSuggestions.length)) {
        e.preventDefault();
        setState({activeIndex: activeIndex === null ? 0 : activeIndex + 1})
      }
    },
    [KEYCODE.UP_ARROW]: (e) => {
      if(activeIndex !== null) {
        e.preventDefault();
        setState({activeIndex: activeIndex === 0 ? null : activeIndex - 1})
      }
    },
    [KEYCODE.ENTER]: (e) => {
      e.preventDefault();
      selectSearchTerm(activeIndex === null ? inputValue : searchSuggestions[activeIndex])
    },
    [KEYCODE.TAB]: resetFocus,
    [KEYCODE.ESCAPE]: () => setState({inputValue: ''})
  });

  return (
    <div id="search-container" ref={searchContainerNode}>
      <input
        id="search-input"
        type="text"
        ref={searchInputNode}
        placeholder={placeholder}
        value={inputValue}
        onFocus={() => setState({searchFocused: true})}
        onKeyDown={keyDownHandler}
        onChange={onInputValueChange}
        autoComplete="off"
      />

      <img className="search-glass" src={`./${iconAssetPath}/search-glass.png`}/>

      {!loading && searchSuggestions.length && searchFocused &&
      <div className="search-suggestions" ref={searchSuggestionsNode}>
        <ul>
          {searchSuggestions.map( (item, index) =>
            <li
              key={index}
              ref={activeIndex === index ? activeSuggestionNode : void 0}
              className={`search-suggestion ${activeIndex === index ? 'active-suggestion' : ''}`}
              onClick={() => selectSearchTerm(item)}
            >
              {item}
            </li>)}
        </ul>
      </div>}
    </div>
  )
}
