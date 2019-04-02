import React, {useState, useEffect, Fragment} from 'react';
import {searchString} from './utils';
import Paging from "./paging";
import Result from './result';

export default function ResultsList ({loading, error, data, searchTerm}) {
  const [page, setPage] = useState(0);

  useEffect(function onSearchTermChange_resetPage () {
    setPage(0)
  }, [searchTerm]);

  function generateFilteredList () {
    let filteredData = data;
    if(searchTerm) {
      let titleMatches = [];
      let publisherMatches = [];
      let otherMatches = [];
      data.forEach( item => {
        if(searchString(searchTerm, item.title)) return titleMatches.push(item);
        if(searchString(searchTerm, item.publisher)) return publisherMatches.push(item);
        for (const key in item) {
          if(searchString(searchTerm, item[key])) otherMatches.push(item)
        }
      });
      filteredData = [...titleMatches, ...publisherMatches, ...otherMatches];
    }

    const totalPages = filteredData.length ? Math.floor(filteredData.length / 50) : 0;
    const pagedList = filteredData.slice((page * 50), ((page + 1) * 50));
    return {resultsList: pagedList, totalPages}
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
