import React from 'react';
import DetailsItem from './detailsItem';
import DetailsSection from "./detailsSection";


export default function PreprintsDetails ({item, content}) {
  return (
    <DetailsSection title={content.details_label_preprint} glossarySection="preprints">
      <div className="left-column">
        <div className="details-content-type-label">{content['preprint-label-author-guidelines']}</div>
        <DetailsItem label={content['preprint-policy']} link={item['preprint-url']}/>
        <DetailsItem label={content['preprint-licensing']} text={item['preprint-licensing']}/>
        <DetailsItem label={content['preprint-version']} text={item['preprint-version']}/>

        <div className="details-content-type-label">{content['preprint-label-link-citations']}</div>
        <DetailsItem label={content['preprint-link']} text={item['preprint-link']}/>
        <DetailsItem label={content['preprint-citation']} text={item['preprint-citation']}/>

        <div className="details-content-type-label">{content['preprint-label-discovery']}</div>
        <DetailsItem label={content['preprint-scoop']} text={item['preprint-scoop']}/>
      </div>

      <div className="right-column">
        <div className="details-content-type-label">{content['preprint-label-media']}</div>
        <DetailsItem label={content['preprint-media']} text={item['preprint-media']}/>
        <DetailsItem label={content['preprint-review']} text={item['preprint-review']}/>
      </div>
    </DetailsSection>
  )
}
