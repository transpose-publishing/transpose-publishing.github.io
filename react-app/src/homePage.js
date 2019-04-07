import React from 'react';
import Search from './search';
import ResultsList from './resultsList';
import VerifiedFilter from './verifiedFilter';
import {usePersistedState, useMergeState} from './utils';
import AddFilters from './addFilters';
import {FILTERNAMES as FN} from './constants';


//Converts FILTERNAMES into state object where every filter is set to false
const initialFilterState = Object.values(FN).reduce((accumulator, currentValue) => {
  accumulator[currentValue] = false;
  return accumulator
}, {});


export default function HomePage ({loading, data, error, content, ...routerProps}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm',"");
  const [filters, updateFilters] = useMergeState(initialFilterState);

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
          <AddFilters content={content} updateFilters={updateFilters}/>

          <VerifiedFilter
            label={content.filter_verified}
            verifiedFilter={filters[FN.VERIFIED]}
            toggleVerifiedFilter={() => updateFilters({[FN.VERIFIED]: !filters[FN.VERIFIED]})}/>
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
