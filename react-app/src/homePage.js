import React, {Fragment, useState} from 'react';
import Search from './search';
import ResultsList from './resultsList';
import VerifiedFilter from './verifiedFilter';
import {usePersistedState, useMergeState} from './utils';
import AddFilters from './addFilters';
import ActiveFilterDisplay from './activeFilterDisplay'
import SortBar from './sortBar';
import CompareFooter from './compareFooter';
import CompareModal from './compareModal';
import {FILTERNAMES as FN} from './constants';



export default function HomePage ({loading, data, error, content}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm',"");
  const [verifiedFilter, setVerifiedFilter] = useState(false);
  const [activeFilters, setFilters] = useState([]);
  const [sort, updateSort] = useMergeState({field: null, order: null});
  const [compareModalOpen, toggleCompareModal] = useState(false);

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

  return compareModalOpen
    ? <CompareModal toggleCompareModal={toggleCompareModal}/>
    : <Fragment>
        <div className="home-banner">
          <div className="banner-row row-1">
            <p className="banner-description" dangerouslySetInnerHTML={{__html: content.home_page_banner_description}}/>
          </div>

          <div className="banner-row row-2">
            <h2 className="search-header">{content.search_header}</h2>
          </div>

          <div className="banner-row row-3">
            <Search
              placeholder={content.search_placeholder}
              data={data}
              loading={loading}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}/>
          </div>

          <div className="banner-row row-4">
            <AddFilters
              content={content}
              activeFilters={activeFilters}
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

        <SortBar sort={sort} updateSort={updateSort} content={content}/>

        <div className="home-content">
          <ResultsList
            loading={loading}
            data={data}
            error={error}
            searchTerm={searchTerm}
            sort={sort}
            activeFilters={verifiedFilter ? [FN.VERIFIED, ...activeFilters] : activeFilters}/>
        </div>

        <CompareFooter toggleCompareModal={toggleCompareModal}/>
      </Fragment>
}
