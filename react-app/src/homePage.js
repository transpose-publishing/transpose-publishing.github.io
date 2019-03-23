import React, {useState, Fragment} from 'react';



export default function HomePage ({loading, data, error, ...routerProps}) {
  const [searchInput, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

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
      <div key={index} className="list-item">
        {index + 1}. {item.title}{item.publisher ? ` - ${item.publisher}` : ''}{item.doi ? ` - ${item.doi}` : ''}{item.issn ? ` - ${item.issn}` : ''}
      </div>)
  }

  function selectSearchTerm (title) {
    setSearchTerm(title);
    setInputValue(title)
  }

  return routerProps.location.pathname !== '/' ? null : (
    <div>
      <div className="home-banner">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => {
              if(!searchInput) {
                setSearchTerm("")
              }
              setSearchFocused(false)
            }}
            onChange={e => setInputValue(e.target.value)}/>

          {!loading && searchInput.length > 2 && searchFocused &&
          <div className="search-suggestions">
            {data
              .filter( item => {
                return item.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
              })
              .map( item =>
                <div key={`${item.title}-${item.publisher}-${Math.random()}`} className="search-suggestion" onMouseDown={() => selectSearchTerm(item.title)}>{item.title}</div>
              )}
          </div>}
        </div>
      </div>

      <div className="home-content">
        {loading
          ? <p>Fetching spreadsheet data, please wait...</p>
          : <div>
              {error
                ? error
                : <Fragment>
                  {!!data.length && filterData()}
                </Fragment>}
            </div>}

      </div>

    </div>
  )
}
