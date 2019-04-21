import React from 'react';
import {SORT_FIELDS, iconAssetPath, SORT_ORDER} from './constants';
import {orderDefaults} from './sortModels';
const {ASC, DESC} = SORT_ORDER;


export default function SortBar ({sort, updateSort, content}) {

  function toggleSort (field) {
    const order = field !== sort.field ? orderDefaults[field] : (sort.order === ASC ? DESC : ASC);
    updateSort({field, order})
  }

  return (
    <div className="sort-order-bar-container">
      <div className="sort-order-bar">
        <div className="sort-button-container">

          <div className="journal-sort-section sort-section">
            <button onClick={() => toggleSort(SORT_FIELDS.TITLE)}>
              {content.title}
              {sort.field === SORT_FIELDS.TITLE && <SortArrow order={sort.order}/>}
            </button>
          </div>

          <div className="publisher-sort-section sort-section">
            <button onClick={() => toggleSort(SORT_FIELDS.PUBLISHER)}>
              {content.publisher}
              {sort.field === SORT_FIELDS.PUBLISHER && <SortArrow order={sort.order}/>}
            </button>
          </div>

          <div className="doi-sort-section sort-section">
            <span>{content.doi}</span>
          </div>

          <div className="issn-sort-section sort-section">
            <span>{content.issn}</span>
          </div>

          <div className="oa-sort-section sort-section">
            <button onClick={() => toggleSort(SORT_FIELDS.OA)}>
              {content.oa}
              {sort.field === SORT_FIELDS.OA && <SortArrow order={sort.order}/>}
            </button>
          </div>

          <div className="date-sort-section sort-section">
            <button onClick={() => toggleSort(SORT_FIELDS.DATE)}>
              {content.date}
              {sort.field === SORT_FIELDS.DATE && <SortArrow order={sort.order}/>}
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-canvas"/>
    </div>
  )
}

function SortArrow ({order}) {
  return (
    <img className={order === ASC ? 'asc' : ''}
      src={`./${iconAssetPath}/Dropdown-Arrow-Icon-Green.svg`}/>
  )
}

