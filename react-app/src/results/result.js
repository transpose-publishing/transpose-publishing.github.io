import React, {Fragment, useState, useContext} from 'react';
import CompareCheckbox from '../compareCheckbox';
import {iconAssetPath} from "../constants";
import {Content} from '../index';
import PeerReviewDetails from './peerReviewDetails';
import OpenPeerReviewDetails from './openPeerReviewDetails';
import CoreviewDetails from './coreviewDetails';
import PreprintsDetails from './preprintsDetails';

const timeouts = {};

export default function Result ({item}) {
  const content = useContext(Content);
  const [showDetails, setShowDetails] = useState(false);
  const [collapsedClass, setCollapsed] = useState(true);

  function toggleShowDetails () {
    if(!showDetails) {
      setShowDetails(true);
      setTimeout(() => {
        setCollapsed(false)
      })
    }
    if(showDetails) {
      if(timeouts[item.uid]) {
        clearTimeout(timeouts[item.uid]);
        delete timeouts[item.uid]
      }
      setCollapsed(!collapsedClass);
      if(!collapsedClass) {
        timeouts[item.uid] = setTimeout(() => {
          setShowDetails(false)
        }, 600)
      }
    }
  }

  return (
    <Fragment>
      <div  className={`result-item ${showDetails && !collapsedClass ? 'expanded' : ''}`} onClick={toggleShowDetails}>
        <div className="result-section-verified">
          {item.verified === "Yes" && <img src={`./${iconAssetPath}/Verified-Icon-1.svg`}/>}
        </div>

        <div className="result-section-title">{item.title}</div>

        <div className="result-section-publisher">{item.publisher}</div>

        <div className="result-section-doi"><a href={item.doi} target="_blank">{item.doi}</a></div>

        <div className="result-section-issn">
          {item.issn &&
            item.issn.split(', ').map(issn => <span key={issn}>{issn}</span>)}
        </div>

        <div className="result-section-oa">
          {item.oa === 'OA' && <img src={`./${iconAssetPath}/100px-Open_Access_logo_PLoS_white.png`}/>}
        </div>

        <div className="result-section-date">{item.date}</div>
      </div>

      {showDetails &&
      <div className={`result-details ${collapsedClass ? 'collapsed' : ''}`}>

          <div className="compare-checkbox-bar">
            <CompareCheckbox item={item} checkboxLabel={content.compare_checkbox_label}/>
          </div>

          <PeerReviewDetails item={item} content={content}/>

          <OpenPeerReviewDetails item={item} content={content}/>

          <CoreviewDetails item={item} content={content}/>

          <PreprintsDetails item={item} content={content}/>
      </div>}
    </Fragment>
  )
}
