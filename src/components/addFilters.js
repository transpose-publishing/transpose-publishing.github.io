import React, {useRef} from 'react';
import {iconAssetPath, FILTER_NAMES as FLTR} from "../constants";
import {useClickOutside, useMergeState, getContent} from 'utils';
import {filterTypesList, filterMap} from '../models/filterModels';

const {content} = getContent();

export default function AddFilters ({activeFilters, addFilter, removeFilter}) {
  const [{menuOpen, typeName, filters, secondaryTypeName, secondaryFiltersList}, updateState] = useMergeState({
    menuOpen: false,
    typeName: null,
    filters: null,
    secondaryTypeName: null,
    secondaryFiltersList: null,
  });

  const buttonRef = useRef(null);

  useClickOutside({
    container: buttonRef,
    handler: toggleMenu,
    addListenerConditional: menuOpen === true,
    dependencies: [menuOpen]
  });

  function toggleMenu () {
    updateState({menuOpen: !menuOpen, typeName: null, filters: null, secondaryTypeName: null, secondaryFiltersList: null})
  }

  function selectType ({typeName, filters}) {
    updateState({typeName, filters})
  }

  function selectSecondaryType ({typeName, filters}) {
    updateState({ secondaryTypeName: typeName, secondaryFiltersList: filters })
  }

  const OAFilter = filterMap[FLTR.OA];

  return (
    <div  className="add-filters-button-container" ref={buttonRef}>
      <button className="add-filters-button" onClick={toggleMenu} >
        {content.add_filter_button}
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
              {item.title}
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
          {OAFilter.title}
        </button>}

        {filters &&
        <div className="filter-list expanded-filter-list">
          {filters.map( filter => {
            if(activeFilters.includes(filter.name)) return null;
            if(filter.filters?.every( filter => activeFilters.includes(filter.name))) return null;
            return (
              <button
                className={
                  `filter-item ${filter.typeName ? 'filter-type-item' : 'filter-list-item'} ${filter.typeName === secondaryTypeName ? 'active' : ''}`
                }
                key={filter.name}
                onClick={() => {
                  if(filter.typeName) {
                    return selectSecondaryType(filter)
                  }
                  addFilter(filter.name);
                  toggleMenu();
                }}
              >
                {filter.title}
                <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>
              </button>
            )
          })}

          {secondaryFiltersList &&
          <div className="filter-list expanded-filter-list secondary">
            {secondaryFiltersList.map( filter => {
              if(activeFilters.includes(filter.name)) return null;
              return (
                <button className="filter-item filter-list-item"
                  key={filter.name}
                  onClick={() => {
                    const activeSecondaryFilter = secondaryFiltersList.find(filter => activeFilters.includes(filter.name));
                    if(activeSecondaryFilter) {
                      removeFilter(activeFilters.indexOf(activeSecondaryFilter.name));
                    }
                    addFilter(filter.name);
                    toggleMenu();
                  }}
                >
                  {filter.title}
                </button>
              )
            })}
          </div>}
        </div>}
      </div>}
    </div>
  )
}
