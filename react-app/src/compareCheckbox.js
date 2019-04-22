import React, {useContext} from 'react';
import {AppState} from './index';



export default function CompareCheckbox ({item, checkboxLabel}) {
  const {appState, dispatchAppState} = useContext(AppState);
  const {compare} = appState;
  const compareIndex = compare.findIndex(compareItem => compareItem.uid === item.uid);
  const checked = compareIndex > -1;
  const disabled = !checked && compare.length === 3;

  function onClick () {
    if(!checked) {
      dispatchAppState({type: 'ADD_COMPARE', item})
    } else {
      dispatchAppState({type: 'REMOVE_COMPARE', index: compareIndex})
    }
  }

  return (
    <div className="compare-checkbox-container">
      <input onClick={onClick} type="checkbox" id={`${item.uid}-checkbox`}/>
      <label htmlFor={`${item.uid}-checkbox`} className={disabled ? 'disabled' : ''}>
        {checked && <span className="checkmark"/>}
        {checkboxLabel}
      </label>
    </div>
  )
}
