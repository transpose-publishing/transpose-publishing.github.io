import React from 'react';
import DetailsItem from './detailsItem';


export default function PeerReviewDetails ({item, content}) {
  return (
    <div className="details-section">
      <div className="header-bar">{content.details_label_pr}</div>
      <div className="details-content">
        <div className="left-column">
          <DetailsItem label={content['pr-type']} text={item['pr-type']}/>
          <DetailsItem label={content['pr-policy']} link={item['pr-policy']}/>
          <DetailsItem label={content['pr-form-url']} link={item['pr-form-url']}/>
          <DetailsItem label={content['pr-credit-url']} link={item['pr-credit-url']}/>
        </div>
        <div className="right-column">
          <DetailsItem label={content['pr-database']} text={item['pr-database']}/>
          <DetailsItem label={content['pr-transfer-policy']} text={item['pr-transfer-policy']} textLink={item['pr-transfer-url']}/>
        </div>
      </div>
    </div>
  )
}
