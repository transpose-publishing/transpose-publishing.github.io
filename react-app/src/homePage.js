import React from 'react';
import Search from './search';
import ResultsList from './resultsList';
import VerifiedFilter from './verifiedFilter';
import {usePersistedState, useMergeState} from './utils';



export default function HomePage ({loading, data, error, content, ...routerProps}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm',"");
  const [filters, updateFilters] = useMergeState({
    verified: false
  });

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

        <div className="banner-row row-4">
          <div className="advanced-filter-container">Advanced Filters</div>

          <VerifiedFilter
            label={content.filter_verified}
            verifiedFilter={filters.verified}
            toggleVerifiedFilter={() => updateFilters({verified: !filters.verified})}/>
        </div>
      </div>

      <div className="order-section-container">
        <div className="order-section"></div>
        <div className="shadow-canvas"/>
      </div>

      <div className="home-content">
        <ResultsList
          loading={loading}
          data={data}
          error={error}
          searchTerm={searchTerm}
          filters={filters}/>
      </div>
    </div>
  )
}
