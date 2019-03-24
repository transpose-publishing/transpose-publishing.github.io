import React, {Fragment} from 'react';

export default function ResultsList ({loading, error, data, searchTerm}) {

  function filterData () {
    let filteredData = data;
    if(searchTerm) {
      filteredData = data.filter( item => {
        for (const key in item) {
          if(item[key].indexOf(searchTerm) > -1) return true
        }
        return false
      })
    }
    return filteredData.map( (item, index) =>
      <div key={index} className="list-item" tabIndex="0">
        {index + 1}. {item.title}{item.publisher ? ` - ${item.publisher}` : ''}{item.doi ? ` - ${item.doi}` : ''}{item.issn ? ` - ${item.issn}` : ''}
      </div>)
  }

  return (
    <Fragment>
      {loading
        ? <p>Fetching spreadsheet data, please wait...</p>
        : <div>
          {error
            ? error
            : <Fragment>
              {!!data.length && filterData()}
            </Fragment>}
        </div>}
    </Fragment>
  )
}
