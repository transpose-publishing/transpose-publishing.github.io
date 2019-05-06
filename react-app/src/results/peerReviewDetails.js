import React from 'react';
import DetailsItem from './detailsItem';
import DetailsSection from './detailsSection'
import content from '../content/content';


export default function PeerReviewDetails ({item}) {
  return (
    <DetailsSection title={content.details_label_pr} glossarySection="peer-review">
      <div className="left-column">
        <DetailsItem label={content.pr_type} text={item['pr-type']}/>
        <DetailsItem label={content.pr_policy} link={item['pr-policy']}/>
        <DetailsItem label={content.pr_form_url} link={item['pr-form-url']}/>
        <DetailsItem label={content.pr_credit_url} link={item['pr-credit-url']}/>
      </div>
      <div className="right-column">
        <DetailsItem label={content.pr_database_details} text={item['pr-database']}/>
        <DetailsItem label={content.pr_transfer_policy_details} text={item['pr-transfer-policy']} textLink={item['pr-transfer-url']}/>
      </div>
    </DetailsSection>
  )
}
