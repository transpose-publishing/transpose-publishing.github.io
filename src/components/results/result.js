import React, {Fragment, useState} from 'react';
import CompareCheckbox from '../compareCheckbox';
import {iconAssetPath} from "../../constants";
import {ContentContext} from '../..';
import PeerReviewDetails from './peerReviewDetails';
import OpenPeerReviewDetails from './openPeerReviewDetails';
import CoreviewDetails from './coreviewDetails';
import PreprintsDetails from './preprintsDetails';
import {getContent, useLayoutEffectOnUpdate} from '../../utils';

const {content} = getContent();
const timeouts = {};

export default function Result ({item, expanded}) {
  const [showDetails, setShowDetails] = useState(expanded);
  const [animationClass_collapsed, setCollapsedClass] = useState(!expanded);

  useLayoutEffectOnUpdate(function onExpandedChange_setExpandedState () {
    setCollapsedClass(!expanded);
    setShowDetails(expanded);
  }, [expanded]);

  function toggleShowDetails () {
    if(!showDetails) {
      setShowDetails(true);
      setTimeout(() => {
        setCollapsedClass(false)
      })
    }
    if(showDetails) {
      if(timeouts[item.uid]) {
        clearTimeout(timeouts[item.uid]);
        delete timeouts[item.uid]
      }
      setCollapsedClass(!animationClass_collapsed);
      if(!animationClass_collapsed) {
        timeouts[item.uid] = setTimeout(() => {
          setShowDetails(false)
        }, 600)
      }
    }
  }

  return (
    <Fragment>
      <div  className={`result-item ${showDetails && !animationClass_collapsed ? 'expanded' : ''}`} onClick={toggleShowDetails}>
        <div className="result-section-verified">
          {item.verified === "Yes" && <img src={`./${iconAssetPath}/Verified-Icon-1.svg`}/>}
        </div>

        <div className="result-section-title">{item.title}</div>

        <div className="result-section-publisher">{item.publisher}</div>

        <div className="result-section-doi"><a href={`http://doi.org/${item.doi}`} target="_blank">{item.doi}</a></div>

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
      <div className={`result-details ${animationClass_collapsed ? 'collapsed' : ''}`}>

          <div className="compare-checkbox-bar">
            <CompareCheckbox item={item} checkboxLabel={content.compare_checkbox_label}/>

            <a className="report-error-link" href={content.report_error_link.link}>{content.report_error_link.text}</a>
          </div>

          <PeerReviewDetails item={item}/>

          <OpenPeerReviewDetails item={item}/>

          <CoreviewDetails item={item}/>

          <PreprintsDetails item={item}/>
      </div>}
    </Fragment>
  )
}
