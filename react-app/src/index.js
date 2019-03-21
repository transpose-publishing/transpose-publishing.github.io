import React, {Fragment, useState, useEffect} from 'react';
import ReactDom from 'react-dom';

const sheetsuApiUrl = 'https://sheetsu.com/apis/v1.0su/7d4c3d615bcf';
const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek/edit#gid=0';

function App () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(sheetsuApiUrl)
      .then(resp => resp.json())
      .then(resp => {
        setData(resp);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(err)
      })
  }, []);

  return (
    <div>
      <p>Hello World!</p>
      <p>{loading ? 'Fetching spreadsheet data, please wait...' : 'Tada!'}</p>
      {!loading &&
      <div>
        {error
          ? 'Oops, something went wrong!'
          : <Fragment>
              {!!data.length && data.map( item => <div>{item.name}-{item.age}</div>)}
              <br/>
              <p>Try it out! Go to the source spreadsheet below and add some names / ages</p>
              <a target="_blank" href={spreadSheetUrl}>{spreadSheetUrl}</a>
            </Fragment>}
      </div>}
    </div>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
