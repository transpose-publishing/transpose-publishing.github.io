import React, {useContext} from 'react';
import {CompareContext, clearCompare} from './compareController';


export default function CompareFooter ({openCompareModal}) {
  const {compare, dispatchCompareAction} = useContext(CompareContext);

  return !compare.length ? null : (
    <div className="compare-footer">
      <div className="buttons-container">
        <button className={`compare-button compare-footer-button ${compare.length < 2 ? 'disabled' : ''}`}
          onClick={openCompareModal}>
          {`Compare 3 policies (${compare.length} of 3)`}
        </button>
        <button className="clear-button compare-footer-button"
          onClick={() => dispatchCompareAction(clearCompare())}
        >
          Clear Selection
        </button>
      </div>
    </div>
  )
}
