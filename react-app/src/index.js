import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './homePage';

const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek/edit?usp=sharing';

function App () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      Tabletop.init({
        key: spreadSheetUrl,
        callback: function(data, tabletop) {
          setLoading(false);
          setData(data);
        },
        simpleSheet: true
      });
    } catch (e) {
      setLoading(false);
      setError('Sorry, something went wrong!')
    }

  }, []);

  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Link to="/">Home</Link>
        <Link to="/user-stories">User Stories</Link>
        <Link to="/about">About</Link>
      </div>

      <Route path="/" render={ routerProps => {
        //Keeping HomePage route outside of switch to preserve its state regardless of current url path
        return <HomePage loading={loading} data={data} error={error} {...routerProps}/>
      }}/>

      <Switch>
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
