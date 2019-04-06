import React, {useState, useEffect, Fragment} from 'react';
import {searchString} from './utils';
import Paging from "./paging";
import Result from './result';


const filterRules = {
  verified: item => item.verified === "Yes"
};


export default function ResultsList ({loading, error, data, searchTerm, filters}) {
  const [page, setPage] = useState(0);

  useEffect(function onSearchTermChange_resetPage () {
    setPage(0)
  }, [searchTerm]);

  function generateFilteredList () {
    let filteredData = data;
    const filtersOn = Object.values(filters).indexOf(true) > -1;
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

    const totalPages = filteredData.length ? Math.floor(filteredData.length / 50) : 0;
    const pagedList = filteredData.slice((page * 50), ((page + 1) * 50));
    return {resultsList: pagedList, totalPages}
  }

  function filterItem (item) {
    for (const filter in filters) {
      if(filters[filter] === true && filterRules[filter](item) === false) {
        return true
      }
    }
    return false;
  }

  const {resultsList, totalPages} = !!data.length ? generateFilteredList() : {resultsList: null, totalPages: null};

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
