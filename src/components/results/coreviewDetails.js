import React from 'react';
import DetailsItem from './detailsItem';
import DetailsSection from "./detailsSection";
import {getContent} from '../../utils';

const {content} = getContent();

export default function CoreviewDetails ({item}) {
  return (
    <DetailsSection title={content.details_label_coreview} glossarySection={anchor_ids.co_review}>
      <div className="left-column">
        <DetailsItem label={content.coreview_policy_details} text={item['coreview-policy']} textLink={item['coreview-url']}/>
      </div>
      <div className="right-column">
        <DetailsItem label={content.coreview_email_details} text={item['coreview-email']}/>
        <DetailsItem label={content.coreview_form_details} text={item['coreview-form']}/>
        <DetailsItem label={content.coreview_database_details} text={item['coreview-database']}/>
      </div>
    </DetailsSection>
  )
}
