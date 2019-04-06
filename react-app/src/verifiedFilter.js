import React from 'react';


export default function VerifiedFilter ({label, verifiedFilter, toggleVerifiedFilter}) {
  return (
    <div className="verified-filter-container">
      <span>{label}</span>
      <button onClick={toggleVerifiedFilter}>
        <div className="verified-filter">
          {verifiedFilter && <span>On</span>}
          <div className="verified-filter-switch"/>
          {!verifiedFilter && <span>Off</span>}
        </div>
      </button>
    </div>
  )
}
