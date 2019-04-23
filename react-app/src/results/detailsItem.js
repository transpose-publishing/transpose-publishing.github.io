import React, {useContext} from 'react';
import {ContentContext} from '../index';
import {parseLinksInString} from '../utils';


export default function DetailsItem ({label, text, link, textLink}) {
  const content = useContext(ContentContext);
  text = parseLinksInString(text);

  return (
    <p>
      <span className="details-content-label">{label}: </span>
      {link && <a className="details-content-link" href={link} target="_blank">Source</a>}
      {text && <span className="details-content-text">
        {text} {textLink && <a className="details-content-link" href={textLink} target="_blank">Source</a>}
      </span>}
      {!link && !text && <span className="details-content-text">{content['no-data']}</span>}
    </p>
  )
}
