import React from 'react';
import {compareController} from '../compareController';



export default function CompareCheckbox ({item, checkboxLabel}) {
  const {compare, addCompare, removeCompare} = compareController();
  const compareIndex = compare.findIndex(compareItem => compareItem.uid === item.uid);
  const checked = compareIndex > -1;
  const disabled = !checked && compare.length === 3;

  function onClick () {
    if(!checked) {
      addCompare(item)
    } else {
      removeCompare(compareIndex)
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
