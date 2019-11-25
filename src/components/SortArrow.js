import React from 'react';
import {iconAssetPath, SORT_ORDER} from "constants";



export default function SortArrow ({order, active}) {
  return (
    <img className={order === SORT_ORDER.ASC ? 'asc' : ''}
         src={`./${iconAssetPath}/Dropdown-Arrow-Icon-${active ? 'Green' : 'White'}.svg`}/>
  )
}
