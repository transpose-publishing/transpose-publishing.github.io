import React from 'react';
import SortArrow from 'components/SortArrow';
import {SORT_FIELDS, SORT_ORDER} from '../constants';
import {orderDefaults} from '../models/sortModels';
import {getContent} from '../utils';

const {content} = getContent();
const {ASC, DESC} = SORT_ORDER;


export default function SortBar ({sort, updateSort}) {

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
              <SortArrow
                order={sort.field === SORT_FIELDS.TITLE ? sort.order : DESC}
                active={sort.field === SORT_FIELDS.TITLE}/>
            </button>
          </div>

          <div className="publisher-sort-section sort-section">
            <button onClick={() => toggleSort(SORT_FIELDS.PUBLISHER)}>
              {content.publisher}
              <SortArrow
                order={sort.field === SORT_FIELDS.PUBLISHER ? sort.order : DESC}
                active={sort.field === SORT_FIELDS.PUBLISHER}/>
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
              <SortArrow
                order={sort.field === SORT_FIELDS.OA ? sort.order : DESC}
                active={sort.field === SORT_FIELDS.OA}/>
            </button>
          </div>

          <div className="date-sort-section sort-section">
            <button onClick={() => toggleSort(SORT_FIELDS.DATE)}>
              {content.date}
              <SortArrow
                order={sort.field === SORT_FIELDS.DATE ? sort.order : DESC}
                active={sort.field === SORT_FIELDS.DATE}/>
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-canvas"/>
    </div>
  )
}

