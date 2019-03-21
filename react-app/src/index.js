import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './homePage';

const sheetsuApiUrl = 'https://sheetsu.com/apis/v1.0su/7d4c3d615bcf';

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
    <Router>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Link to="/">Home</Link>
        <Link to="/user-stories">User Stories</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route exact path="/" render={() => {
          return <HomePage loading={loading} data={data} error={error}/>
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
