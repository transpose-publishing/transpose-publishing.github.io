import React from 'react';
import {Link} from "react-router-dom";
import {iconAssetPath} from '../constants';
import content from '../content/content';


export default function DetailsSection ({title, children, glossarySection}) {
  return (
    <div className="details-section">
      <div className="header-bar">
        <span>{title}</span>
        <Link to={`${content.more_info_page.path}/${glossarySection}`} target="_blank">
          <img src={`./${iconAssetPath}/info-icon.png`}/>
        </Link>
      </div>

      <div className="details-content">
        {children}
      </div>
    </div>
  )
}
