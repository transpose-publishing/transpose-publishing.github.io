import React, {useState, useLayoutEffect, Fragment} from 'react';
import {searchString, sortGenerator} from '../../utils';
import Paging from "./paging";
import Result from './result';
import {itemsPerPage, SEARCH_TYPE} from 'constants';
import {filterMap} from '../../models/filterModels';
import {sortOptions} from '../../models/sortModels';


export default function ResultsList ({loading, data, searchTerm, searchType, sort, activeFilters, expandFirstItem}) {
  const [page, setPage] = useState(0);

  useLayoutEffect(function onSearchOrFilterChange_resetPage () {
    setPage(0)
  }, [searchTerm, activeFilters]);

  const {resultsList, totalPages, searchTotal} = !!data.length ? generateFilteredList()
    : {resultsList: null, totalPages: 0, searchTotal: 0};

  function filterItem (item) {
    for (const filter of activeFilters) {
      if(filterMap[filter]?.rule?.(item) === false) {
        return true
      }
    }
    return false;
  }

  function generateFilteredList () {
    let filteredData = data;
    const filtersOn = !!activeFilters.length;

    if (!searchTerm && sort.field) {
      if(filtersOn) filteredData = filteredData.filter( item => filterItem(item) === false);
      filteredData.sort(sortGenerator(sort.field, sort.order, sortOptions[sort.field]));

    } else if (searchTerm) {
      let titleMatches = [];
      let publisherMatches = [];
      let otherMatches = [];
      const searchTitles = searchType === SEARCH_TYPE.ALL || searchType === SEARCH_TYPE.TITLE;
      const searchPublishers = searchType === SEARCH_TYPE.ALL || searchType === SEARCH_TYPE.PUBLISHER;
      data.forEach(item => {
        if (filtersOn && filterItem(item) === true) return;
        if (searchTitles && searchString(searchTerm, item.title)) return titleMatches.push(item);
        if (searchPublishers && searchString(searchTerm, item.publisher)) return publisherMatches.push(item);
        if (searchType === SEARCH_TYPE.ALL) {
          for (const key in item) {
            if (searchString(searchTerm, item[key])) return otherMatches.push(item)
          }
        }
      });
      filteredData = [...titleMatches, ...publisherMatches, ...otherMatches];
      if(sort.field) filteredData.sort(sortGenerator(sort.field, sort.order, sortOptions[sort.field]))

    } else if (filtersOn) {
      filteredData = filteredData.filter( item => filterItem(item) === false)
    }

    const totalPages = filteredData.length ? Math.ceil(filteredData.length / itemsPerPage) : 0;
    const pagedList = filteredData.slice((page * itemsPerPage), ((page + 1) * itemsPerPage));
    return {resultsList: pagedList, totalPages, searchTotal: filteredData.length}
  }

  return (
    <div className="results-list">
      {loading && <div>{loading}</div>}
      {!loading && resultsList &&
        <Fragment>
          <p className='results-list-total'><b>{searchTotal}</b> search results</p>
          {resultsList.map((item, index) => <Result key={item.uid} item={item} expanded={expandFirstItem && index === 0}/>)}
          <Paging page={page} totalPages={totalPages} setPage={setPage}/>
        </Fragment>}
    </div>
  )
}
