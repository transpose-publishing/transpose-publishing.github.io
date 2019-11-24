import React, {Fragment} from 'react';
import DetailsItem from './detailsItem';
import {iconAssetPath} from '../../constants';
import DetailsSection from "./detailsSection";
import {getContent, isNot} from '../../utils';

const {content} = getContent();

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

export default function PeerReviewDetails ({item}) {
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
    <DetailsSection title={content.details_label_opr} glossarySection={anchor_ids.open_peer_review}>
      <div className="left-column open-peer-review-section">
        {!!specifiedPolicy.length &&
          <Fragment>
            <img className="check-icon" src={`./${iconAssetPath}/check-icon.png`}/>
            {specifiedPolicy.map( key =>
              <DetailsItem key={key} label={content[getDetailsContentKey(key)]} text={item[key]}/>)}
          </Fragment>}

        {!!noPolicy.length &&
          <div className='open-peer-review-section--false'>
            <img className="x-icon" src={`./${iconAssetPath}/x-icon.png`}/>
            {noPolicy.map(key =>
              <p key={key}><span className="details-content-label">{content[getDetailsContentKey(key, false)]}</span></p>)}
          </div>}
      </div>

      <div className="right-column">
        <DetailsItem label={content.opr_additional_details} text={item['opr-additional']}/>
      </div>
    </DetailsSection>
  )
}


function getDetailsContentKey (key, type) {
  return `${key.replace(/-/g, '_')}_details${type === false ? '_false' : ''}`;
}
