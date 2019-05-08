import React from 'react';
import DetailsItem from './detailsItem';
import DetailsSection from "./detailsSection";
import content from '../../content/content';


export default function PreprintsDetails ({item}) {
  return (
    <DetailsSection title={content.details_label_preprint} glossarySection="preprints">
      <div className="left-column">
        <div className="details-content-type-label">{content['preprint_label_author_guidelines']}</div>
        <DetailsItem label={content.preprint_policy_details} link={item['preprint-url']}/>
        <DetailsItem label={content.preprint_licensing_details} text={item['preprint-licensing']}/>
        <DetailsItem label={content.preprint_version_details} text={item['preprint-version']}/>

        <div className="details-content-type-label">{content['preprint_label_link_citations']}</div>
        <DetailsItem label={content.preprint_link_details} text={item['preprint-link']}/>
        <DetailsItem label={content.preprint_citation_details} text={item['preprint-citation']}/>

        <div className="details-content-type-label">{content['preprint_label_discovery']}</div>
        <DetailsItem label={content.preprint_scoop_details} text={item['preprint-scoop']}/>
      </div>

      <div className="right-column">
        <div className="details-content-type-label">{content['preprint_label_media']}</div>
        <DetailsItem label={content.preprint_media_details} text={item['preprint-media']}/>
        <DetailsItem label={content.preprint_review_details} text={item['preprint-review']}/>
      </div>
    </DetailsSection>
  )
}
