import React from 'react';
import {compareController} from '../compareController';


export default function CompareFooter ({openCompareModal}) {
  const {compare, clearCompare} = compareController();

  return !compare.length ? null : (
    <div className="compare-footer">
      <div className="buttons-container">
        <button className={`compare-button compare-footer-button ${compare.length < 2 ? 'disabled' : ''}`}
          onClick={openCompareModal}>
          {`Compare 3 policies (${compare.length} of 3)`}
        </button>
        <button className="clear-button compare-footer-button"
          onClick={clearCompare}
        >
          Clear Selection
        </button>
      </div>
    </div>
  )
}
