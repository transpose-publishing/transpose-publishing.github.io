import React, {useState} from 'react';

const statsUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSU4cmOwS2NdM16S0h8F6A3FSPs1fp2Eng9HPXeosfLsL_lsXRtEC8odQW5GJTfz7fmVbl2f2YJ2_Sd/pubhtml?gid=146126401&single=true';

export default function StatsPage () {
  const [loading, setLoading] = useState(true);

  function onLoad () {
    setLoading(false)
  }

  return (
    <div className={`stats-container${loading ? ' stats-container--loading' : ''}`}>
      {loading && <div className='loading-cover'><h1>Loading stats...</h1></div>}
      <iframe onLoad={onLoad} className='stats-iframe' src={statsUrl}></iframe>
    </div>
  )
}
