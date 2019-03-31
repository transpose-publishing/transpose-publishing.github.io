import React from 'react';
import Search from './search';
import ResultsList from './resultsList';
import {usePersistedState} from './utils';



export default function HomePage ({loading, data, error, content, ...routerProps}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm',"");

  return (
    <div>
      <div className="home-banner">
        <div className="banner-row row-1">
          <p className="banner-description" dangerouslySetInnerHTML={{__html: content.home_page_banner_description}}/>
        </div>

        <div className="banner-row row-2">
          <h2 className="search-header">{content.search_header}</h2>
        </div>

        <div className="banner-row row-3">
          <Search data={data} loading={loading} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>

        <div className="banner-row row-4"></div>
      </div>

      <div className="filter-section-container">
        <div className="filter-section"></div>
        <div className="shadow-canvas"/>
      </div>

      <div className="home-content">
        <ResultsList loading={loading} data={data} error={error} searchTerm={searchTerm}/>
      </div>
    </div>
  )
}
