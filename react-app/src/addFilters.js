import React, {useState, useRef} from 'react';
import {iconAssetPath} from "./constants";
import {useClickOutside} from './utils';
import {filterTypesList} from './filtersModel';



export default function AddFilters ({content, addFilter}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterType, setFilterType] = useState({
    typeName: null,
    filters: null
  });

  const buttonRef = useRef(null);

  useClickOutside({
    container: buttonRef.current,
    handler: toggleMenu,
    conditional: menuOpen === true,
    dependencies: [menuOpen]
  });

  function toggleMenu () {
    if(menuOpen) setFilterType({type: null, filters: null});
    setMenuOpen(!menuOpen)
  }

  function selectType ({typeName, filters}) {
    setFilterType({typeName, filters})
  }

  return (
    <div  className="add-filters-button-container" ref={buttonRef}>
      <button className="add-filters-button" onClick={toggleMenu} >
        Add Filter
        <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>
      </button>

      {menuOpen &&
      <div className="filter-list filter-types-list">
        {filterTypesList.map( item =>
          <button className={`filter-item filter-type-item ${item.typeName === filterType.typeName ? 'active' : ''}`}
            key={item.typeName}
            onClick={e => {
              e.stopPropagation();
              selectType(item)
            }}
          >
            {item.contentGetter(content)}
            <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>
          </button>)}

        {filterType.filters &&
        <div className="filter-list expanded-filter-list">
          {filterType.filters.map( filter =>
            <button className="filter-item filter-list-item"
              key={filter.name}
              onClick={() => {
                addFilter(filter.name);
                toggleMenu();
              }}
            >
              {filter.contentGetter(content)}
            </button>)}
        </div>}
      </div>}
    </div>
  )
}
