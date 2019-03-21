import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './homePage';



function App () {
  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Link to="/">Home</Link>
        <Link to="/user-stories">User Stories</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
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
