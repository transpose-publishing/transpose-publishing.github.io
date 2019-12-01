import React, {Fragment, useState, useLayoutEffect} from 'react';
import Search from './Search';
import ResultsList from './results/resultsList';
import VerifiedFilter from './verifiedFilter';
import {usePersistedState, useMergeState, useArrayState, useLayoutEffectOnUpdate, prepareDomForModal, getContent} from '../utils';
import AddFilters from './addFilters';
import ActiveFilterDisplay from './activeFilterDisplay'
import SortBar from './sortBar';
import CompareFooter from './compareFooter';
import CompareModal from './compareModal';
import {filterMap} from '../models/filterModels'
import {FILTER_NAMES as FLTR, iconAssetPath, SEARCH_TYPE} from 'constants';

const {content} = getContent();



export default function HomePage ({loading, data, urlSearchQuery}) {
  const [{searchTerm, searchType}, setSearchTerm] = usePersistedState('HomePage:searchTerm', {
    searchTerm: urlSearchQuery, searchType: SEARCH_TYPE.ALL
  });
  const [verifiedFilter, toggleVerifiedFilter] = useState(false);
  const [sort, updateSort] = useMergeState({field: null, order: null});
  const [compareModalOpen, toggleCompareModal] = useState(false);
  const [expandFirstItem, setExpandFirstItem] = useState(!!urlSearchQuery);

  const [activeFilters, {
    pushUnique: addFilter,
    removeByIndex: removeFilter,
    clearArray: clearFilters
  }] = useArrayState([]);

  useLayoutEffect(function onCompareModalToggle_setModalDomSettings () {
    if(compareModalOpen) prepareDomForModal();
    return prepareDomForModal.cleanup
  }, [compareModalOpen]);

  useLayoutEffectOnUpdate(function onUrlSearchQueryChange_setExpandFirstItemTrue () {
    setExpandFirstItem(!!urlSearchQuery)
  }, [urlSearchQuery]);

  function setSearchTermAndExpandFirstItemFalse (searchTerm, searchType) {
    setSearchTerm({searchTerm, searchType});
    setExpandFirstItem(false)
  }

  return (
    <Fragment>
      {compareModalOpen && <CompareModal closeCompareModal={() => toggleCompareModal(false)}/>}
      <div className="home-banner">
        <div className="banner-row row-1">
          <p className="banner-description" dangerouslySetInnerHTML={{__html: content.home_page_banner_description}}/>

          <a className="new-record-button" href={content.new_record_link.link} target="_blank">{content.new_record_link.text}</a>
        </div>

        <div className="banner-row row-2">
          <h2 className="search-header">{content.search_header}</h2>

          <a className="download-button" href={content.download_link.link}>
            <img src={`./${iconAssetPath}/Download-Icon.svg`}/>
            {content.download_link.text}
          </a>
        </div>

        <div className="banner-row row-3">
          <Search
            placeholder={content.search_placeholder}
            data={data}
            setSearchTerm={setSearchTermAndExpandFirstItemFalse}
            urlSearchQuery={urlSearchQuery}/>
        </div>

        <div className="banner-row row-4">
          <AddFilters
            activeFilters={activeFilters}
            addFilter={addFilter}
            removeFilter={removeFilter}/>

          <VerifiedFilter
            label={filterMap[FLTR.VERIFIED].title}
            verifiedFilter={verifiedFilter}
            toggleVerifiedFilter={() => toggleVerifiedFilter(!verifiedFilter)}/>
        </div>
      </div>

      <ActiveFilterDisplay
        activeFilters={activeFilters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}/>

      <SortBar sort={sort} updateSort={updateSort}/>

      <div className="home-content">
        <ResultsList
          loading={loading}
          data={data}
          searchTerm={searchTerm}
          searchType={searchType}
          sort={sort}
          activeFilters={verifiedFilter ? [FLTR.VERIFIED, ...activeFilters] : activeFilters}
          expandFirstItem={expandFirstItem}/>
      </div>

      <CompareFooter openCompareModal={() => toggleCompareModal(true)}/>
    </Fragment>
  )
}
