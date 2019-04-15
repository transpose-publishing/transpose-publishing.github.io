import React from 'react';
import DetailsItem from './detailsItem';
import {isNot} from '../utils';
import {iconAssetPath} from '../constants';


const haveHaveNot = [
  'opr-reports',
  'opr-responses',
  'opr-letters',
  'opr-versions',
  'opr-identities-published',
  'opr-indenties-author',
  'opr-comments',
  'opr-interaction',
];

const noOptions = ['', 'No', 'Not specified'];

export default function PeerReviewDetails ({item, content}) {
  const hasData = [];
  const noData = [];

  for (const key of haveHaveNot) {
    isNot(item[key], noOptions) ? hasData.push(key) : noData.push(key)
  }

  return (
    <div className="details-section">
      <div className="header-bar">{content.details_label_opr}</div>
      <div className="details-content">
        <div className="left-column">
          <img className="check-icon" src={`./${iconAssetPath}/check-icon.png`}/>
          {hasData.map( key =>
            <DetailsItem key={key} label={content[key]} text={item[key]}/>)}

          <img className="x-icon" src={`./${iconAssetPath}/x-icon.png`}/>
          {noData.map(key =>
            <p key={key}><span className="details-content-label">{content[key]}</span></p>)}
        </div>

        <div className="right-column">
          <DetailsItem label={content['opr-additional']} text={item['opr-additional']}/>
        </div>
      </div>
    </div>
  )
}
