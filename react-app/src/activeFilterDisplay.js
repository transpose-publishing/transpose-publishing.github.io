import React, {useState, useRef, useEffect} from 'react';
import {filterList} from './filtersModel';
import {FILTERNAMES, iconAssetPath} from './constants';



export default function ActiveFilterDisplay ({activeFilters, content, removeFilter, clearFilters}) {
  const [{overflow, lastVisibleFilter}, setOverflow] = useState({overflow: false, lastVisibleFilter: null});
  const [showAll, setShowAll] = useState(false);

  const buttonRefs = {};
  Object.keys(FILTERNAMES).forEach( filter => buttonRefs[filter] = useRef(null));

  useEffect(function onFiltersChange_updateOverflowState () {
    let yOffset = null;
    let prevFilter = null;
    for(const filter of activeFilters) {
      const {y} = buttonRefs[filter].current.getBoundingClientRect();
      if(!yOffset) {
        yOffset = y;
      } else if (y > yOffset) {
        if(!overflow) {
          setOverflow({
            overflow: true,
            lastVisibleFilter: prevFilter
          });
        }
        return;
      }
      prevFilter = filter;
    }
    if(overflow) {
      setOverflow({
        overflow: false,
        lastVisibleFilter: null
      });
      setShowAll(false)
    }
  }, [activeFilters]);


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
                {filterList[filter].contentGetter(content)}
                <img src={`./${iconAssetPath}/Close-Icon-1.svg`}/>
              </button>

              {filter === lastVisibleFilter && !showAll &&
              <button
                className="overflow-button"
                onClick={() => setShowAll(true)}
              >
                <span>...</span>
              </button>}
            </div>)}
        </div>

        <div className="all-filter-controls">
          <button onClick={clearFilters}>Clear all filters</button>
          {overflow && <button onClick={() => setShowAll(!showAll)}>Show all filters</button>}
        </div>
      </div>
    </div>)

  : null
}
