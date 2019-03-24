import React, {useState, Fragment} from 'react';
import Search from './search';
import ResultsList from './resultsList';



export default function HomePage ({loading, data, error, ...routerProps}) {
  const [searchTerm, setSearchTerm] = useState("");

  return routerProps.location.pathname !== '/' ? null : (
    <div>
      <div className="home-banner">
        <Search data={data} loading={loading} setSearchTerm={setSearchTerm}/>
      </div>

      <div className="home-content">
        <ResultsList loading={loading} data={data} error={error} searchTerm={searchTerm}/>
      </div>
    </div>
  )
}
