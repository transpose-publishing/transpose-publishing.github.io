import React, {Fragment, useEffect} from 'react';
import StandardBanner from './standardBanner';
import {getContent, renderContent} from '../utils';

const {about_page} = getContent();

export default function AboutPage () {
  useEffect(function onMount_startTwitterFeed () {
    twttr.widgets.load(document.getElementById('twitter-timeline'));
  }, []);

  const primaryDescription = about_page.find(node => node.class === 'primary-description');

  return (
    <Fragment>
      <StandardBanner/>

      <div className="standard-content about-page-content">
        {primaryDescription &&
          <Fragment>
            {primaryDescription.title && <h3 className="section-header">{primaryDescription.title}</h3>}
            <p className={about_page[0].class}>{about_page[0].content}</p>
          </Fragment>}

        <div className='about-page-container'>
          <div className='twitter-feed'>
            <a
              className="twitter-timeline"
              data-theme="light"
              data-link-color="#2B7BB9"
              href="https://twitter.com/TRANSPOSEsci?ref_src=twsrc%5Etfw">
              Tweets by TRANSPOSEsci
            </a>
          </div>

          {about_page.map(aboutNode => {
            if(aboutNode.class === 'primary-description') return null;
            return (
              <Fragment>
                {aboutNode.title && <h3 className="section-header">{aboutNode.title}</h3>}
                {typeof aboutNode.content === 'string' &&
                <p className={aboutNode.class}>{aboutNode.content}</p>}
                {typeof aboutNode.content === 'object' && renderContent(aboutNode.content)}
              </Fragment>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}
