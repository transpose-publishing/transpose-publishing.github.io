import React, {useContext} from 'react';
import {iconAssetPath} from "./constants";
import {CompareContext} from './compareController';
import PeerReviewDetails from "./results/peerReviewDetails";
import OpenPeerReviewDetails from './results/openPeerReviewDetails';
import CoreviewDetails from './results/coreviewDetails';
import PreprintsDetails from './results/preprintsDetails';


export default function CompareModal ({closeCompareModal, content}) {
  const {compare} = useContext(CompareContext);

  return (
    <div className="compare-modal">
      <div className="compare-modal-header">
        <span>{`Compare ${compare.length} policies`}</span>
        <button onClick={closeCompareModal}><img src={`./${iconAssetPath}/Close-Icon-1.svg`}/></button>
      </div>

      <div className="compare-columns-container">
        {compare.map( item =>
          <div className="compare-column" key={item.uid}>
            <div className="compare-column-header">

            </div>

            <PeerReviewDetails item={item} content={content}/>

            <OpenPeerReviewDetails item={item} content={content}/>

            <CoreviewDetails item={item} content={content}/>

            <PreprintsDetails item={item} content={content}/>
          </div>)}
      </div>
    </div>
  )
}
