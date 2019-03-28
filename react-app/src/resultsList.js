import React, {useState, useEffect, Fragment} from 'react';
import {searchString} from './utils';


export default function ResultsList ({loading, error, data, searchTerm}) {
  const [page, setPage] = useState(0);
  let totalPages;

  useEffect(function onSearchTermChange_resetPage () {
    setPage(0)
  }, [searchTerm]);

  function filterData () {
    let filteredData = [...data];
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

    totalPages = filteredData.length ? Math.floor(filteredData.length / 50) : 0;

    filteredData = filteredData.slice((page * 50), ((page + 1) * 50));

    return filteredData.map( (item, index) =>
      <div key={index} className="list-item" tabIndex="0">
        {index + 1}. {item.title}{item.publisher ? ` - ${item.publisher}` : ''}{item.doi ? ` - ${item.doi}` : ''}{item.issn ? ` - ${item.issn}` : ''}
      </div>)
  }

  return (
    <Fragment>
      {loading
        ? <p>Fetching spreadsheet data, please wait...</p>
        : <div className="results-list">
            {error
              ? error
              : <Fragment>
                  {!!data.length && filterData()}
                </Fragment>}

            {!!data.length &&
            <div className="paging-container">
              <button onClick={() => page > 0 && setPage(page - 1)}>{'<'}</button>
              <button onClick={() => page < totalPages && setPage(page + 1)}>{'>'}</button>
              <p>Page {page + 1}</p>
            </div>}
          </div>}
    </Fragment>
  )
}
