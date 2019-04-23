import React, {useContext} from 'react';
import {CompareContext, addCompare, removeCompare} from './compareController';



export default function CompareCheckbox ({item, checkboxLabel}) {
  const {compare, dispatchCompareAction} = useContext(CompareContext);
  const compareIndex = compare.findIndex(compareItem => compareItem.uid === item.uid);
  const checked = compareIndex > -1;
  const disabled = !checked && compare.length === 3;

  function onClick () {
    if(!checked) {
      dispatchCompareAction(addCompare(item))
    } else {
      dispatchCompareAction(removeCompare(compareIndex))
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
