import React, {useRef} from 'react';
import {iconAssetPath, KEYCODE, SEARCH_TYPE} from 'constants';
import {keyboardControls} from 'utils';
import useSearchMachine from './searchStateMachine';


export default function Search ({placeholder, setSearchTerm, data, urlSearchQuery}) {
  const refs = {
    searchContainerNode: useRef(null),
    searchSuggestionsNode: useRef(null),
    activeSuggestionNode: useRef(null),
    searchInputNode: useRef(null),
  };

  const [{stateCondition, inputValue, activeIndex, results, searchType}, dispatch] =
    useSearchMachine({
      props: {data, setSearchTerm, urlSearchQuery},
      refs
    });

  const keyDownHandler = keyboardControls({
    [KEYCODE.DOWN_ARROW]: (e) => dispatch('onArrowDown', e),
    [KEYCODE.UP_ARROW]: (e) => dispatch('onArrowUp', e),
    [KEYCODE.ENTER]: (e) => dispatch('onEnter', e),
    [KEYCODE.TAB]: () => dispatch('resetFocus'),
    [KEYCODE.ESCAPE]: () => dispatch('resetInputValue')
  });

  return (
    <div id="search-container" ref={refs.searchContainerNode}>
      <input
        id="search-input"
        type="text"
        ref={refs.searchInputNode}
        placeholder={placeholder}
        value={inputValue}
        onFocus={() => dispatch('focus')}
        onKeyDown={keyDownHandler}
        onChange={e => dispatch('onInputValueChange', e.target.value)}
        autoComplete="off"
      />

      <img className="search-glass" src={`./${iconAssetPath}/search-glass.png`}/>

      <select className='search-type-select' onChange={e => dispatch('setSearchType', e.target.value)}>
        <option>{SEARCH_TYPE.ALL}</option>
        <option>{SEARCH_TYPE.TITLE}</option>
        <option>{SEARCH_TYPE.PUBLISHER}</option>
      </select>

      <div className='search-type-select-text'>{searchType}</div>

      {stateCondition.includes('resultsDisplayed') &&
        <div className="search-suggestions" ref={refs.searchSuggestionsNode}>
          <ul>
            {results.map( (item, index) =>
              <li
                key={index}
                ref={activeIndex === index ? refs.activeSuggestionNode : void 0}
                className={`search-suggestion ${activeIndex === index ? 'active-suggestion' : ''}`}
                onClick={() => dispatch('selectSearchTerm', item)}
              >
                {item}
              </li>)}
          </ul>
        </div>}
    </div>
  )
}
