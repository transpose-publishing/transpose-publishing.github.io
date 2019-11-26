import React, {useEffect, useLayoutEffect} from 'react';
import {useLayoutEffectOnUpdate, useClickOutside, StateMachine, useMachine} from 'utils';
import {SEARCH_TYPE} from 'constants';


const SearchMachine = new StateMachine({
  state: (props) => ({
    state: ['idle'],
    inputValue: props.urlSearchQuery,
    activeIndex: null,
    results: [],
  }),

  transitions: {
    idle: {
      focus () {
        const {results, inputValue} = this.state;
        const newState = {state: ['focused']};
        if (!results.length && inputValue.length > 2) {
          newState.results = this.actions.calculateResults(inputValue);
        }
        if(results.length || newState.results?.length) {
          newState.state.push('resultsDisplayed')
        }
        this.setMachineState(newState)
      },
      setUrlSearchQuery (searchTerm) {
        this.actions.selectSearchTerm(searchTerm)
      },
    },

    focused: {
      resetFocus () {
        this.setMachineState({state: ['idle'], activeIndex: null})
      },
      resultsDisplayed () {
        this.setMachineState({state: ['focused', 'resultsDisplayed']})
      },
      onInputValueChange (value)  {
        const newState = {
          inputValue: value,
          activeIndex: null,
          results: value.length > 2 ? this.actions.calculateResults(value) : [],
        };
        if(newState.results.length) {
          this.dispatch('resultsDisplayed')
        }
        this.setMachineState(newState)
      },
      resetInputValue () {
        this.dispatch('onInputValueChange', '')
      },
      onEnter (e) {
        e.preventDefault();
        this.dispatch('selectSearchTerm', this.state.inputValue)
      },
      selectSearchTerm (searchTerm) {
        this.actions.selectSearchTerm(searchTerm)
      },
      setUrlSearchQuery (searchTerm) {
        this.actions.selectSearchTerm(searchTerm)
      },
      calculateResults () {
        const results = this.actions.calculateResults(this.state.inputValue);
        if(!results.length) {
          this.dispatch('noResultsDisplayed')
        }
        this.setMachineState({results})
      },
    },

    resultsDisplayed: {
      noResultsDisplayed () {
        this.setMachineState({state: ['focused'], activeIndex: null, results: []})
      },
      onInputValueChange (value) {
        const newState = {
          inputValue: value,
          activeIndex: null,
          results: value.length > 2 ? this.actions.calculateResults(value) : []
        };
        if(!newState.results.length) {
          this.dispatch('noResultsDisplayed')
        }
        this.setMachineState(newState)
      },
      onArrowDown (e) {
        e.preventDefault();
        this.setMachineState({state: ['focused', 'resultsDisplayed', 'keyboardNavigation'], activeIndex: 0})
      },
    },

    keyboardNavigation: {
      onArrowDown (e) {
        const {activeIndex, results} = this.state;
        if(activeIndex + 1 !== results.length) {
          e.preventDefault();
          this.setMachineState({activeIndex: activeIndex + 1})
        }
      },
      onArrowUp (e) {
        const {activeIndex} = this.state;
        e.preventDefault();
        if(activeIndex === 0) {
          this.setMachineState({state: ['focused', 'resultsDisplayed'], activeIndex: null})
        } else {
          this.setMachineState({activeIndex: activeIndex - 1})
        }
      },
      onEnter (e) {
        const {results, activeIndex} = this.state;
        e.preventDefault();
        this.dispatch('selectSearchTerm', results[activeIndex])
      }
    },
  },

  actions: {
    calculateResults (inputValue) {
      const {data, searchType} = this.props;
      if(!data) return [];
      const publishers = [];
      const titles = [];
      const publishersUsedIndex = [];
      const titlesUsedIndex = [];
      data.forEach( item => {
        const searchValue = inputValue.toLowerCase();

        if(searchType === SEARCH_TYPE.ALL || searchType === SEARCH_TYPE.PUBLISHER) {
          const publisher = item.publisher.toLowerCase();
          if(publisher?.includes(searchValue) && !publishersUsedIndex.includes(publisher)) {
            publishers.push(item.publisher);
            publishersUsedIndex.push(publisher);
          }
        }
        if(searchType === SEARCH_TYPE.ALL || searchType === SEARCH_TYPE.TITLE) {
          const title = item.title.toLowerCase();
          if(title?.includes(searchValue) && !titlesUsedIndex.includes(title)) {
            titles.push(item.title);
            titlesUsedIndex.push(title);
          }
        }
      });
      return [...titles, ...publishers]
    },
    selectSearchTerm (searchTerm) {
      this.props.setSearchTerm(searchTerm, this.props.searchType);
      this.setMachineState({inputValue: searchTerm});
      this.dispatch('resetFocus');
    },
  }
});

export default function useSearchMachine ({props, refs}) {
  return useMachine(SearchMachine, {props, refs}, ({state, inputValue, activeIndex}, dispatch) => {
    const {urlSearchQuery, searchType} = props;
    const focused = state.includes('focused');

    useClickOutside({
      container: refs.searchContainerNode,
      handler: () => dispatch('resetFocus'),
      addListenerConditional: focused,
      dependencies: [focused]
    });

    useLayoutEffect(function onActiveIndexChange_scrollToActiveSuggestion () {
      if(activeIndex !== null) {
        const containerHeight = 211;
        const suggestionHeight = 18;
        const suggestionMargin = 6;
        const offset = refs.activeSuggestionNode.current.offsetTop;
        const scrollTop = refs.searchSuggestionsNode.current.scrollTop;
        if(offset > containerHeight - suggestionHeight + scrollTop) {
          refs.searchSuggestionsNode.current.scrollTop = offset + suggestionHeight + suggestionMargin - containerHeight
        } else if (scrollTop > offset) {
          refs.searchSuggestionsNode.current.scrollTop = offset - suggestionMargin
        }
      }
    }, [activeIndex]);

    useEffect(function onFocusedFalse_blurSearchInput () {
      if(!focused) {
        refs.searchInputNode.current.blur()
      }
    }, [focused]);

    useLayoutEffectOnUpdate(function onUrlSearchQueryChange_updateSearchTerm () {
      dispatch('setUrlSearchQuery', urlSearchQuery)
    }, [urlSearchQuery]);

    useEffect(function onSearchTypeChange_recalculateResults () {
      dispatch('calculateResults')
    }, [searchType])
  })
}
