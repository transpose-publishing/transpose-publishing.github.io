import React, {useState, useRef, useEffect} from 'react';



export default function ActiveFilterDisplay ({filters, removeFilter, clearFilters}) {
  const [{overflow, lastVisibleFilter}, setOverflow] = useState({overflow: false, lastVisibleFilter: null});
  const [showAll, setShowAll] = useState(false);

  const buttonRefs = {};
  const buttonElements = [];

  Object.entries(filters).forEach(([filter, isActive]) => {
    buttonRefs[filter] = useRef(null);
    if(isActive) buttonElements.push(
      <button
        className="active-filter-button"
        onClick={() => removeFilter(filter)}
        key={filter}
        ref={buttonRefs[filter]}
      >
        {filter}

        {filter === lastVisibleFilter && !showAll &&
        <button
          className="overflow-button"
          onClick={e => {
            e.stopPropagation();
            setShowAll(true)
          }}
        >
          ...
        </button>}
      </button>)
  });

  useEffect(function onFiltersChange_updateOverflowState () {
    let yOffset = null;
    let prevFilter = null;
    for(const filter in buttonRefs) {
      if(buttonRefs[filter].current) {
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
    }
    if(overflow) {
      setOverflow({
        overflow: false,
        lastVisibleFilter: null
      });
      setShowAll(false)
    }
  }, [filters]);


  return buttonElements.length ? (
    <div className="active-filter-bar">
      <div className={`active-filter-container ${showAll ? 'show-all' : ''}`}>

        <div className="active-filter-list">
          {buttonElements}
        </div>

        <div className="all-filter-controls">
          <button onClick={clearFilters}>Clear all filters</button>
          {overflow && <button onClick={() => setShowAll(!showAll)}>Show all filters</button>}
        </div>
      </div>
    </div>)

  : null
}
