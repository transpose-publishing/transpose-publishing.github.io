import React from 'react';
import DetailsItem from './detailsItem';
import DetailsSection from "./detailsSection";


export default function CoreviewDetails ({item, content}) {
  return (
    <DetailsSection title={content.details_label_coreview} glossarySection="co-review">
      <div className="left-column">
        <DetailsItem label={content['coreview-policy']} text={item['coreview-policy']} textLink={item['coreview-url']}/>
      </div>
      <div className="right-column">
        <DetailsItem label={content['coreview-email']} text={item['coreview-email']}/>
        <DetailsItem label={content['coreview-form']} text={item['coreview-form']}/>
        <DetailsItem label={content['coreview-database']} text={item['coreview-database']}/>
      </div>
    </DetailsSection>
  )
}
