import React, {useRef, useLayoutEffect} from 'react';
import {filterMap, filterList} from '../models/filterModels';
import {iconAssetPath} from '../constants';
import {useMergeState} from '../utils';



export default function ActiveFilterDisplay ({activeFilters, removeFilter, clearFilters}) {
  const [{lastVisibleFilter, showAll}, updateState] = useMergeState({
    lastVisibleFilter: null,
    showAll: false
  });

  const buttonRefs = {};
  filterList.forEach(filter => buttonRefs[filter.name] = useRef(null));

  useLayoutEffect(function onFiltersChange_calculateLastVisibleFilter () {
    let yOffset = null;
    let prevFilter = null;
    for(const filter of activeFilters) {
      const {top} = buttonRefs[filter].current.getBoundingClientRect();
      if(!yOffset) {
        yOffset = top;
      } else if (top > yOffset) {
        if(!lastVisibleFilter || lastVisibleFilter !== prevFilter) {
          updateState({
            lastVisibleFilter: prevFilter
          });
        }
        return;
      }
      prevFilter = filter;
    }
    if(lastVisibleFilter) {
      updateState({
        lastVisibleFilter: null,
        showAll: false
      });
    }
  }, [activeFilters, lastVisibleFilter]);


  return activeFilters.length ? (
    <div className="active-filter-bar">
      <div className={`active-filter-container ${showAll ? 'show-all' : ''}`}>

        <div className="active-filter-list">
          {activeFilters.map((filter, index) =>
            <div key={filter} className="active-filter-button-container">
              <button
                className="active-filter-button"
                onClick={() => removeFilter(index)}
                ref={buttonRefs[filter]}
              >
                {filterMap[filter].title}
                <img src={`./${iconAssetPath}/Close-Icon-1.svg`}/>
              </button>

              {filter === lastVisibleFilter && !showAll &&
              <button
                className="overflow-button"
                onClick={() => updateState({showAll: true})}
              >
                <span>...</span>
              </button>}
            </div>)}
        </div>

        <div className="all-filter-controls">
          <button onClick={clearFilters}>Clear all filters</button>

          {lastVisibleFilter &&
          <button onClick={() => updateState({showAll: !showAll})}>
            {showAll ? 'Collapse filters' : 'Show all filters'}
          </button>}
        </div>
      </div>
    </div>)

  : null
}
