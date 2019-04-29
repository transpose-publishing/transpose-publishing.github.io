import React from 'react';
import DetailsItem from './detailsItem';
import {isNot} from '../utils';
import {iconAssetPath} from '../constants';
import DetailsSection from "./detailsSection";


const policies = [
  'opr-reports',
  'opr-responses',
  'opr-letters',
  'opr-versions',
  'opr-identities-published',
  'opr-indenties-author',
  'opr-comments',
  'opr-interaction',
];

export default function PeerReviewDetails ({item, content}) {
  const specifiedPolicy = [];
  const noPolicy = [];

  for (const key of policies) {
    if(item[key] === 'No' || item[key].includes('No ') || item[key].includes('No,')) {
      noPolicy.push(key)
    } else if(isNot(item[key], ['', 'Not specified'])) {
      specifiedPolicy.push(key)
    }
  }

  return (
    <DetailsSection title={content.details_label_opr} glossarySection="open-peer-review">
      <div className="left-column">
        <img className="check-icon" src={`./${iconAssetPath}/check-icon.png`}/>
        {specifiedPolicy.map( key =>
          <DetailsItem key={key} label={content[key]} text={item[key]}/>)}

        <img className="x-icon" src={`./${iconAssetPath}/x-icon.png`}/>
        {noPolicy.map(key =>
          <p key={key}><span className="details-content-label">{content[key]}</span></p>)}
      </div>

      <div className="right-column">
        <DetailsItem label={content['opr-additional']} text={item['opr-additional']}/>
      </div>
    </DetailsSection>
  )
}
