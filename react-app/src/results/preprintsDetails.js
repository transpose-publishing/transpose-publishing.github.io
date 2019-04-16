import React from 'react';
import DetailsItem from './detailsItem';


export default function PreprintsDetails ({item, content}) {
  return (
    <div className="details-section">
      <div className="header-bar">{content.details_label_preprint}</div>
      <div className="details-content">
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
      </div>
    </div>
  )
}
