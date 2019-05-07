import React, {useRef} from 'react';
import {iconAssetPath, FILTERNAMES as FN} from "../constants";
import {useClickOutside, useMergeState} from '../utils';
import {filterTypesList, filterList} from '../models/filterModels';



export default function AddFilters ({activeFilters, addFilter}) {
  const [{menuOpen, typeName, filters}, updateState] = useMergeState({
    menuOpen: false,
    typeName: null,
    filters: null
  });

  const buttonRef = useRef(null);

  useClickOutside({
    container: buttonRef.current,
    handler: toggleMenu,
    addListenerConditional: menuOpen === true,
    dependencies: [menuOpen]
  });

  function toggleMenu () {
    updateState({menuOpen: !menuOpen, typeName: null, filters: null})
  }

  function selectType ({typeName, filters}) {
    updateState({typeName, filters})
  }

  const OAFilter = filterList[FN.OA];

  return (
    <div  className="add-filters-button-container" ref={buttonRef}>
      <button className="add-filters-button" onClick={toggleMenu} >
        Add Filter
        <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>
      </button>

      {menuOpen &&
      <div className="filter-list filter-types-list">
        {filterTypesList.map( item => {
          if(item.filters.every( filter => activeFilters.includes(filter.name))) return null;
          return (
            <button className={`filter-item filter-type-item ${item.typeName === typeName ? 'active' : ''}`}
              key={item.typeName}
              onClick={() => selectType(item)}
            >
              {item.content}
              <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>
            </button>
          )
        })}

        {!activeFilters.includes(OAFilter.name) &&
        <button className={`filter-item filter-list-item`}
          key={OAFilter.name}
          onClick={() => {
            addFilter(OAFilter.name);
            toggleMenu();
          }}
        >
          {OAFilter.content}
        </button>}

        {filters &&
        <div className="filter-list expanded-filter-list">
          {filters.map( filter => {
            if(activeFilters.includes(filter.name)) return null;
            return (
              <button className="filter-item filter-list-item"
                key={filter.name}
                onClick={() => {
                  addFilter(filter.name);
                  toggleMenu();
                }}
              >
                {filter.content}
              </button>
            )
          })}
        </div>}
      </div>}
    </div>
  )
}
