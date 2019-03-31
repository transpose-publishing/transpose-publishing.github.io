import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './homePage';

const startTime = Date.now();
const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek/edit?usp=sharing';

function fetchData ({rows = 0}) {
  return new Promise((resolve, reject) => {
    sheetrock({
      url: spreadSheetUrl + "#gid=0",
      fetchSize: rows,
      callback: (errors, optiosn, resp) => {
        const dataArray = [];
        for (const row of resp.rows) {
          if(row.num !== 0) {
            const item = {};
            let labelIndex = 0;
            for (const label of row.labels) {
              item[label] = row.cellsArray[labelIndex];
              labelIndex++
            }
            dataArray.push(item);
          }
        }
        console.log('timer', Date.now() - startTime);
        resolve(dataArray);
      }
    });
  });
}

function App () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  // useEffect(() => {
  //   Tabletop.init({
  //     key: spreadSheetUrl,
  //     callback: function(data) {
  //       console.log('time', Date.now() - startTime);
  //       setLoading(false);
  //       setData(data);
  //     },
  //     simpleSheet: true
  //   });
  // }, []);

  useEffect(() => {
    fetchData({rows: 50})
      .then( dataArray => {
        setData(dataArray);
        setLoading(false);
        fetchData({rows: 0}) //0 fetches all data
          .then( dataArray => setData(dataArray))
      })
  }, []);

  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Link to="/">Home</Link>
        <Link to="/user-stories">User Stories</Link>
        <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route path="/" render={ routerProps => {
          return <HomePage loading={loading} data={data} error={error} {...routerProps}/>
        }}/>
        <Route path="/user-stories" render={() => <div>User stories</div>}/>
        <Route path="/about" render={() => <div>About</div>}/>
      </Switch>
    </Router>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
