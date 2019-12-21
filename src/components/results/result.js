import React, {Fragment} from 'react';
import CompareCheckbox from '../compareCheckbox';
import {iconAssetPath} from "../../constants";
import PeerReviewDetails from './peerReviewDetails';
import OpenPeerReviewDetails from './openPeerReviewDetails';
import CoreviewDetails from './coreviewDetails';
import PreprintsDetails from './preprintsDetails';
import UnverifiedIcon from "./UnverifiedIcon";
import {getContent, useFadeInOut} from 'utils';

const {content} = getContent();

export default function Result ({item, expanded}) {
  const [showDetails, animationClass, toggleShowDetails] = useFadeInOut({controlledState: expanded, fadeTime: 600});

  return (
    <Fragment>
      <div  className={`result-item ${animationClass ? 'expanded' : ''}`} onClick={toggleShowDetails}>
        <div className="result-section-verified">
          {item.verified === "Yes"
            ? <img className='verified-icon' src={`./${iconAssetPath}/Verified-Icon-1.svg`}/>
            : <UnverifiedIcon key={showDetails && animationClass}/>}
        </div>

        <div className="result-section-title">{item.title}</div>

        <div className="result-section-publisher">{item.publisher}</div>

        <div className="result-section-doi"><a href={`http://doi.org/${item.doi}`} target="_blank">{item.doi}</a></div>

        <div className="result-section-issn">
          {item.issn &&
            item.issn.split(', ').map((issn, index) => <span key={issn + index}>{issn}</span>)}
        </div>

        <div className="result-section-oa">
          {item.oa === 'OA' && <img src={`./${iconAssetPath}/100px-Open_Access_logo_PLoS_white.png`}/>}
        </div>

        <div className="result-section-date">{item.date}</div>
      </div>

      {showDetails &&
      <div className={`result-details ${animationClass ? 'expanded' : 'collapsed'}`}>

          <div className="compare-checkbox-bar">
            <CompareCheckbox item={item} checkboxLabel={content.compare_checkbox_label}/>
            {(item.verified !== "Yes" && item['prefilled-URL'])
              ? <a className="report-error-link" href={item['prefilled-URL']} target="_blank">
                  {content.edit_record_button}
                </a>
              : <a className="report-error-link" href={content.report_error_link.link}>
                  {content.report_error_link.text}
                </a>}
          </div>

          <PeerReviewDetails item={item}/>

          <OpenPeerReviewDetails item={item}/>

          <CoreviewDetails item={item}/>

          <PreprintsDetails item={item}/>
      </div>}
    </Fragment>
  )
}
