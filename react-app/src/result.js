import React from 'react';


export default function Result ({item}) {
  return (
    <div  className="result-item">
      <div className="result-section-verified">
        {item.verified === "Yes" && <img src={'./assets/Icons/Verified-Icon-1.svg'}/>}
      </div>

      <div className="result-section-title">{item.title}</div>

      <div className="result-section-publisher">{item.publisher}</div>

      <div className="result-section-doi"><a href={item.doi} target="_blank">{item.doi}</a></div>

      <div className="result-section-issn">
        {item.issn &&
          item.issn.split(', ').map(issn => <span key={issn}>{issn}</span>)}
      </div>

      <div className="result-section-oa">
        {item.oa === 'OA' && <img src={'./assets/Icons/40px-Open_Access_logo_PLoS_white.png'}/>}
      </div>

      <div className="result-section-date">{item.date}</div>
    </div>
  )
}
