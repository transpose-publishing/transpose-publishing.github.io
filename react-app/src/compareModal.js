import React, {useContext} from 'react';
import {iconAssetPath} from "./constants";
import {AppState} from './index';


export default function CompareModal ({toggleCompareModal}) {
  const {appState, dispatchAppState} = useContext(AppState);

  return (
    <div className="compare-modal">
      <button onClick={() => toggleCompareModal(false)}><img className="close-icon" src={`./${iconAssetPath}/Close-Icon-1.svg`}/></button>
    </div>
  )
}
