import React, {useState, useRef} from 'react';
import {iconAssetPath} from "./constants";
import {useClickOutside} from './utils';
import filterTypesList from './filterTypesModel';



export default function AddFilters ({content, updateFilters}) {
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
    <button className="add-filters-button" onClick={toggleMenu} ref={buttonRef}>
      Add Filter
      <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>

      {menuOpen &&
      <div className="filter-list filter-types-list">
        {filterTypesList.map( item =>
          <span className={`filter-item filter-type-item ${item.typeName === filterType.typeName ? 'active' : ''}`}
            key={item.typeName}
            onClick={e => {
              e.stopPropagation();
              selectType(item)
            }}
          >
            {item.contentGetter(content)}
            <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Grey.svg`}/>
          </span>)}

          {filterType.filters &&
          <div className="filter-list expanded-filter-list">
            {filterType.filters.map( filter =>
              <span className="filter-item filter-list-item"
                key={filter.name}
                onClick={() => updateFilters({[filter.name]: true})}
              >
                {filter.contentGetter(content)}
              </span>)}
          </div>}
      </div>}
    </button>
  )
}
