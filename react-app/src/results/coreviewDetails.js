import React from 'react';
import DetailsItem from './detailsItem';


export default function CoreviewDetails ({item, content}) {
  return (
    <div className="details-section">
      <div className="header-bar">{content.details_label_coreview}</div>
      <div className="details-content">
        <div className="left-column">
          <DetailsItem label={content['coreview-policy']} text={item['coreview-policy']} textLink={item['coreview-url']}/>
        </div>
        <div className="right-column">
          <DetailsItem label={content['coreview-email']} text={item['coreview-email']}/>
          <DetailsItem label={content['coreview-form']} text={item['coreview-form']}/>
          <DetailsItem label={content['coreview-database']} text={item['coreview-database']}/>
        </div>
      </div>
    </div>
  )
}
