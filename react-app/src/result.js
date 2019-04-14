import React, {Fragment, useState} from 'react';
import CompareCheckbox from './compareCheckbox';
import {iconAssetPath} from "./constants";


export default function Result ({item}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <div  className={`result-item ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
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

      {expanded &&
      <div className="result-details">
        <div className="compare-checkbox-bar">
          <CompareCheckbox item={item}/>
        </div>

        <div className="pr-section details-section">
          <div className="header-bar"></div>
        </div>

        <div className="opr-section details-section">
          <div className="header-bar"></div>
        </div>

        <div className="coreview-section details-section">
          <div className="header-bar"></div>
        </div>

        <div className="preprints-section details-section">
          <div className="header-bar"></div>
        </div>
      </div>}
    </Fragment>
  )
}
