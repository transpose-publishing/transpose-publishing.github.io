import React, {Fragment, useState, useLayoutEffect} from 'react';
import Search from './search';
import ResultsList from './results/resultsList';
import VerifiedFilter from './verifiedFilter';
import {usePersistedState, useMergeState, useArrayState, useLayoutEffectOnUpdate, prepareDomForModal, getContent} from '../utils';
import AddFilters from './addFilters';
import ActiveFilterDisplay from './activeFilterDisplay'
import SortBar from './sortBar';
import CompareFooter from './compareFooter';
import CompareModal from './compareModal';
import {FILTER_TYPES as FT, iconAssetPath} from '../constants';

const {content} = getContent();



export default function HomePage ({loading, data, urlSearchQuery}) {
  const [searchTerm, setSearchTerm] = usePersistedState('HomePage:searchTerm', urlSearchQuery);
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

  function setSearchTermAndExpandFirstItemFalse (term) {
    setSearchTerm(term);
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
            loading={loading}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTermAndExpandFirstItemFalse}
            urlSearchQuery={urlSearchQuery}/>
        </div>

        <div className="banner-row row-4">
          <AddFilters
            activeFilters={activeFilters}
            addFilter={addFilter}/>

          <VerifiedFilter
            label={content.verified}
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
          sort={sort}
          activeFilters={verifiedFilter ? [FT.VERIFIED, ...activeFilters] : activeFilters}
          expandFirstItem={expandFirstItem}/>
      </div>

      <CompareFooter openCompareModal={() => toggleCompareModal(true)}/>
    </Fragment>
  )
}
