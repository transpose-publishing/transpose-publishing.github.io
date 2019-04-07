import React, {useState} from 'react';
import Search from './search';
import ResultsList from './resultsList';
import VerifiedFilter from './verifiedFilter';
import {usePersistedState} from './utils';
import AddFilters from './addFilters';
import ActiveFilterDisplay from './activeFilterDisplay'
import {FILTERNAMES as FN} from './constants';



export default function HomePage ({loading, data, error, content, ...routerProps}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm',"");
  const [verifiedFilter, setVerifiedFilter] = useState(false);
  const [activeFilters, setFilters] = useState([]);

  function addFilter (name) {
    if(!activeFilters.includes(name)) {
      setFilters([...activeFilters, name])
    }
  }

  function removeFilter (index) {
    const newArray = [...activeFilters];
    newArray.splice(index, 1);
    setFilters(newArray)
  }

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
          <AddFilters
            content={content}
            addFilter={addFilter}/>

          <VerifiedFilter
            label={content.filter_verified}
            verifiedFilter={verifiedFilter}
            toggleVerifiedFilter={() => setVerifiedFilter(!verifiedFilter)}/>
        </div>
      </div>

      <ActiveFilterDisplay
        activeFilters={activeFilters}
        content={content}
        removeFilter={removeFilter}
        clearFilters={() => setFilters([])}/>

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
          activeFilters={verifiedFilter ? [FN.VERIFIED, ...activeFilters] : activeFilters}/>
      </div>
    </div>
  )
}
