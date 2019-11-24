import React from 'react';
import {parseLinksInString} from '../../utils';
import {getContent} from '../../utils';

const {content} = getContent();

export default function DetailsItem ({label, text, link, textLink}) {
  text = parseLinksInString(text);

  return (
    <p>
      <span className="details-content-label">{label}: </span>
      {link && <a className="details-content-link" href={link} target="_blank">Source</a>}
      {text &&
        <span className="details-content-text">
          {text} {textLink && <a className="details-content-link" href={textLink} target="_blank">Source</a>}
        </span>}
      {!link && !text && <span className="details-content-text">{content.no_data}</span>}
    </p>
  )
}
