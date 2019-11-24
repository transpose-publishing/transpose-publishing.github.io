import React, {Fragment} from 'react';
import StandardBanner from './standardBanner';
import {getContent, renderContent} from '../utils';

const {about_page} = getContent();

export default function AboutPage () {
  return (
    <Fragment>
      <StandardBanner/>

      <div className="standard-content about-page-content">
        {about_page.map(aboutNode =>
          <Fragment>
            {aboutNode.title && <h3 className="section-header">{aboutNode.title}</h3>}
            {typeof aboutNode.content === 'string' &&
              <p className={aboutNode.class}>{aboutNode.content}</p>}
            {typeof aboutNode.content === 'object' && renderContent(aboutNode.content)}
          </Fragment>)}
      </div>
    </Fragment>
  )
}
