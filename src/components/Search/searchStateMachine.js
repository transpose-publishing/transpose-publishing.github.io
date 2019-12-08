import React, {useEffect, useLayoutEffect} from 'react';
import {useLayoutEffectOnUpdate, useClickOutside, ConditionMachine, useConditionMachine} from 'utils';
import {SEARCH_TYPE} from 'constants';


const SearchMachine = new ConditionMachine({
  state: (props) => ({
    stateCondition: ['idle'],
    inputValue: props.urlSearchQuery,
    activeIndex: null,
    results: [],
  }),

  stateConditions: {
    all: {
      selectSearchTerm (searchTerm) {
        this.props.setSearchTerm(searchTerm, this.props.searchType);
        this.setState({inputValue: searchTerm});
        this.dispatch('resetFocus');
      },
      updateResults () {
        const results = this.actions.calculateResults(this.state.inputValue);
        if(!results.length) {
          this.dispatch('noResultsDisplayed')
        } else {
          this.setState({results})
        }
      },
    },

    idle: {
      focus () {
        const {results, inputValue} = this.state;
        const newState = {stateCondition: ['focused']};
        if (!results.length && inputValue.length > 2) {
          newState.results = this.actions.calculateResults(inputValue);
        }
        if(results.length || newState.results?.length) {
          newState.stateCondition.push('resultsDisplayed')
        }
        this.setState(newState)
      },
    },

    focused: {
      resetFocus () {
        this.setState({stateCondition: ['idle'], activeIndex: null})
      },
      resultsDisplayed () {
        this.setState({stateCondition: ['focused', 'resultsDisplayed']})
      },
      onInputValueChange (value)  {
        const newState = {
          inputValue: value,
          activeIndex: null,
          results: value.length > 2 ? this.actions.calculateResults(value) : [],
        };
        this.dispatch(newState.results.length ? 'resultsDisplayed' : 'noResultsDisplayed');
        this.setState(newState)
      },
      resetInputValue () {
        this.dispatch('onInputValueChange', '')
      },
      onEnter (e) {
        e.preventDefault();
        this.dispatch('selectSearchTerm', this.state.inputValue)
      },
    },

    resultsDisplayed: {
      noResultsDisplayed () {
        this.setState({stateCondition: ['focused'], activeIndex: null, results: []})
      },
      onArrowDown (e) {
        e.preventDefault();
        this.setState({stateCondition: ['focused', 'resultsDisplayed', 'keyboardNavigation'], activeIndex: 0})
      },
    },

    keyboardNavigation: {
      onArrowDown (e) {
        const {activeIndex, results} = this.state;
        if(activeIndex + 1 !== results.length) {
          e.preventDefault();
          this.setState({activeIndex: activeIndex + 1})
        }
      },
      onArrowUp (e) {
        const {activeIndex} = this.state;
        e.preventDefault();
        if(activeIndex === 0) {
          this.setState({stateCondition: ['focused', 'resultsDisplayed'], activeIndex: null})
        } else {
          this.setState({activeIndex: activeIndex - 1})
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
  }
});

export default function useSearchMachine ({props, refs}) {
  return useConditionMachine(SearchMachine, {props, refs}, ({stateCondition, inputValue, activeIndex}, dispatch) => {
    const {urlSearchQuery, searchType} = props;
    const focused = stateCondition.includes('focused');

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
      dispatch('selectSearchTerm', urlSearchQuery)
    }, [urlSearchQuery]);

    useEffect(function onSearchTypeChange_recalculateResults () {
      dispatch('updateResults')
    }, [searchType])
  })
}
