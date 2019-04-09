import React, {useState, useLayoutEffect, Fragment} from 'react';
import {searchString} from './utils';
import Paging from "./paging";
import Result from './result';
import {itemsPerPage} from './constants';
import {filterRules} from './filtersModel';


export default function ResultsList ({loading, error, data, searchTerm, activeFilters}) {
  const [page, setPage] = useState(0);

  useLayoutEffect(function resetPage () {
    setPage(0)
  }, [searchTerm, activeFilters]);

  const {resultsList, totalPages} = !!data.length ? generateFilteredList() : {resultsList: null, totalPages: 0};

  function generateFilteredList () {
    let filteredData = data;
    const filtersOn = !!activeFilters.length;
    if(searchTerm) {
      let titleMatches = [];
      let publisherMatches = [];
      let otherMatches = [];
      data.forEach( item => {
        if(filtersOn && filterItem(item) === true) return;
        if(searchString(searchTerm, item.title)) return titleMatches.push(item);
        if(searchString(searchTerm, item.publisher)) return publisherMatches.push(item);
        for (const key in item) {
          if(searchString(searchTerm, item[key])) otherMatches.push(item)
        }
      });
      filteredData = [...titleMatches, ...publisherMatches, ...otherMatches];

    } else if (!searchTerm && filtersOn) {
      filteredData = filteredData.filter( item => filterItem(item) === false)
    }

    const totalPages = filteredData.length ? Math.floor(filteredData.length / itemsPerPage) : 0;
    const pagedList = filteredData.slice((page * itemsPerPage), ((page + 1) * itemsPerPage));
    return {resultsList: pagedList, totalPages}
  }

  function filterItem (item) {
    for (const filter of activeFilters) {
      if(filterRules[filter] && filterRules[filter](item) === false) {
        return true
      }
    }
    return false;
  }

  return (
    <div className="results-list">
      {!loading && resultsList &&
      <Fragment>
        {resultsList.map((item, index) => <Result key={index} item={item}/>)}
        <Paging page={page} totalPages={totalPages} setPage={setPage}/>
      </Fragment>}
    </div>
  )
}
