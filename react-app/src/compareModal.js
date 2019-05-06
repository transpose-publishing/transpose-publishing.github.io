import React, {useContext} from 'react';
import {iconAssetPath} from "./constants";
import {CompareContext} from './compareController';
import PeerReviewDetails from "./results/peerReviewDetails";
import OpenPeerReviewDetails from './results/openPeerReviewDetails';
import CoreviewDetails from './results/coreviewDetails';
import PreprintsDetails from './results/preprintsDetails';
import content from './content/content';

export default function CompareModal ({closeCompareModal}) {
  const {compare} = useContext(CompareContext);
  const tableRows = [[], [], [], [], []];
  compare.forEach( item => {
    tableRows[0].push(<ColumnHeader item={item}/>);
    tableRows[1].push(<PeerReviewDetails item={item}/>);
    tableRows[2].push(<OpenPeerReviewDetails item={item}/>);
    tableRows[3].push(<CoreviewDetails item={item}/>);
    tableRows[4].push(<PreprintsDetails item={item}/>)
  });

  return (
    <div className="compare-modal">
      <div className="compare-modal-header">
        <span>{`Compare ${compare.length} policies`}</span>
        <button onClick={closeCompareModal}><img src={`./${iconAssetPath}/Close-Icon-1.svg`}/></button>
      </div>

      <div className="compare-table-container">
        <table className="compare-table">
          {tableRows.map( row =>
            <tr>
              {row.map( section => <td>{section}</td>)}
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}


function ColumnHeader ({item}) {
  return (
    <div className="compare-column-header">
      <div className="verified-icon-container">
        {item.verified && <img src={`./${iconAssetPath}/Verified-Icon-1.svg`}/>}
      </div>
      <div className="header-title">
        <span><b>{`${content.title}:`}</b>{item.title}</span>
        <span><b>{`${content.publisher}:`}</b>{item.publisher}</span>
      </div>
    </div>
  )
}
