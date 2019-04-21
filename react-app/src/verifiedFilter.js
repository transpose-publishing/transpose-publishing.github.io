import React from 'react';


export default function VerifiedFilter ({label, verifiedFilter, toggleVerifiedFilter}) {
  return (
    <div className="verified-filter-container">
      <span>{label}</span>
      <button onClick={toggleVerifiedFilter}>
        <div className="verified-filter">
          <span>On</span>
          <span>Off</span>
          <div className={`verified-filter-switch ${verifiedFilter ? 'on' : ''}`}/>
        </div>
      </button>
    </div>
  )
}
