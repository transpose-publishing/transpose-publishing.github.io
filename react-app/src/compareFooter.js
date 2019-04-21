import React, {useContext} from 'react';
import {AppState} from "./index";


export default function CompareFooter ({toggleCompareModal}) {
  const {appState, dispatchAppState} = useContext(AppState);
  const policiesLength = appState.compare.length;

  return !policiesLength ? null : (
    <div className="compare-footer">
      <div className="buttons-container">
        <button className={`compare-button compare-footer-button ${policiesLength < 2 ? 'disabled' : ''}`}
          onClick={() => toggleCompareModal(true)}>
          {`Compare 3 policies (${policiesLength} of 3)`}
        </button>
        <button className="clear-button compare-footer-button"
          onClick={() => dispatchAppState({type: 'CLEAR_COMPARE'})}
        >
          Clear Selection
        </button>
      </div>
    </div>
  )
}
