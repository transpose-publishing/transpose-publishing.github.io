import React, {useState, Fragment} from 'react';
import Search from './search';
import ResultsList from './resultsList';
import {usePersistedState} from './utils';



export default function HomePage ({loading, data, error, ...routerProps}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm',"");

  return (
    <div>
      <div className="home-banner">
        <Search data={data} loading={loading} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>

      <div className="home-content">
        <ResultsList loading={loading} data={data} error={error} searchTerm={searchTerm}/>
      </div>
    </div>
  )
}
