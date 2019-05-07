import React from 'react';
import content from '../content/content'


export default function StandardBanner () {
  return (
    <div className="standard-banner">
      <div className="banner-content">
        <h2 dangerouslySetInnerHTML={{__html: content.banner_description}}/>
      </div>
    </div>
  )
}
