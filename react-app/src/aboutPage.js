import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import StandardBanner from './standardBanner';
import content from './content/content';
import {contributorsList} from './content/contributorsModels';


export default function AboutPage () {
  return (
    <Fragment>
      <StandardBanner/>

      <div className="standard-content about-page-content">
        <p className="primary-description">{content.primary_description}</p>

        <h3 className="section-header">{content.more_info_header}</h3>
        <a href={content.application_link.link} target="_blank">{content.application_link.text}</a>
        <a href={content.preview_info_link.link} target="_blank">{content.preview_info_link.text}</a>
        <Link to="/user-stories">{content.use_cases_link_text}</Link>

        <h3 className="section-header">{content.get_involved_header}</h3>
        <a href={content.edit_link.link} target="_blank">{content.edit_link.text}</a>
        <a href={content.follow_link.link} target="_blank">{content.follow_link.text}</a>

        <h3 className="section-header">{content.contributors_header}</h3>
        {contributorsList.map( contributor => <p>{contributor}</p>)}

      </div>
    </Fragment>
  )
}
