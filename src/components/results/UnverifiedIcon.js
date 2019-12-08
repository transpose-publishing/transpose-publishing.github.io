import React, {Fragment, useState} from 'react';
import {iconAssetPath} from "constants";
import {getContent, renderContent} from 'utils';

const {dictionary} = getContent();

export default function UnverifiedIcon () {
  const [hover, setHover] = useState(false);

  return (
    <Fragment>
      <img
        className='unverified-icon'
        src={`./${iconAssetPath}/${hover ? 'Verify hover' : 'Verify'}.svg`}
        onMouseEnter={() => setHover(true)}
      />
      {hover &&
        <div className='hover-area' onMouseLeave={() => setHover(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <h3>{dictionary.unverified_tooltip.title}</h3>
            {dictionary.unverified_tooltip.paragraphs.map((paragraph, i) =>
              <p key={i}>{renderContent(paragraph)}</p>)}
          </div>
        </div>}
    </Fragment>
  )
}
