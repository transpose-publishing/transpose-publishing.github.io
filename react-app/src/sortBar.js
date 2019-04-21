import React from 'react';
import {SORT_FIELDS, iconAssetPath} from './constants';

export default function SortBar ({sort, setSort}) {
  return (
    <div className="sort-order-bar-container">
      <div className="sort-order-bar">
        <div className="sort-button-container">

          <div className="journal-sort-section sort-section">
            <button onClick={() => setSort(SORT_FIELDS.JOURNAL)}>Journal</button>
            {sort === SORT_FIELDS.JOURNAL && <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Green.svg`}/>}
          </div>

          <div className="publisher-sort-section sort-section">
            <button onClick={() => setSort(SORT_FIELDS.PUBLISHER)}>Publisher</button>
            {sort === SORT_FIELDS.PUBLISHER && <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Green.svg`}/>}
          </div>

          <div className="doi-sort-section sort-section">
            <span>DOI</span>
          </div>

          <div className="oa-sort-section sort-section">
            <button onClick={() => setSort(SORT_FIELDS.OA)}>OA</button>
            {sort === SORT_FIELDS.OA && <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Green.svg`}/>}
          </div>

          <div className="issn-sort-section sort-section">
            <span>ISSN</span>
          </div>

          <div className="date-sort-section sort-section">
            <button onClick={() => setSort(SORT_FIELDS.DATE)}>Date</button>
            {sort === SORT_FIELDS.DATE && <img src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Green.svg`}/>}
          </div>
        </div>
      </div>
      <div className="shadow-canvas"/>
    </div>
  )
}
