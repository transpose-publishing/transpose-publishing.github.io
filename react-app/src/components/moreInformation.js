import React, {Fragment, useLayoutEffect} from 'react';
import StandardBanner from './standardBanner';
import content from '../content/content';
import {glossary, editorial_policies, faq} from '../content/moreInfo'
import {renderContent} from '../utils';


export default function MoreInformation ({anchor}) {

  useLayoutEffect(function scrollToAnchor () {
    if(anchor) {
      const element = document.getElementById(anchor);
      if(element) element.scrollIntoView()
    }
  }, [anchor]);

  return (
    <Fragment>
      <StandardBanner/>
      <div>
        <div className="info-section">
          <h2>{content.glossary_header}</h2>
          <p>{renderContent(content.glossary_description)}</p>

          <div>
            {glossary.map( section =>
              <Fragment>
                <h3 id={section.anchor_id}>{section.title}</h3>

                {section.cards.map( card =>
                  <div className="info-card">
                    <h4>{card.title}</h4>
                    <p>{renderContent(card.description)}</p>
                  </div>)}
              </Fragment>)}
          </div>
        </div>

        <div className="info-section">
          <h2 className="with-margin">{content.editorial_policies_header}</h2>

          <div>
            {editorial_policies.map( card =>
              <div className="info-card">
                <h4>{card.title}</h4>
                <p>{renderContent(card.bullets || card.description)}</p>
              </div>)}
          </div>
        </div>

        <div className="info-section">
          <h2 className="with-margin">{content.faq_header}</h2>

          <div>
            {faq.map( card =>
              <div className="info-card">
                <h4>{card.title}</h4>
                <p>{renderContent(card.description)}</p>
              </div>)}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
