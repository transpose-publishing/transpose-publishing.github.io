import React, {useEffect, useState, useReducer} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HomePage from './homePage';
import Header from "./header";
import {fetchContent, fetchData} from './googleApi';


const initialState = {
  content: {}
};

function appStateReducer (state, action) {
  switch (action.type) {
    case 'content':
      return {...state, content: action.content};
    default:
      return state;
  }
}

export const AppState = React.createContext(initialState);

function App () {
  const [{content, ...appState}, dispatchAppState] = useReducer(appStateReducer, initialState);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData({rows: 50})
      .then( dataArray => {
        setData(dataArray);
        setLoading(false);
        fetchData({rows: 0}) //0 fetches all data
          .then( dataArray => setData(dataArray))
      })
  }, []);

  useEffect(() => {
    fetchContent().then( content => dispatchAppState({type: 'content', content}))
  }, []);

  return (
    <AppState.Provider value={{appState, content, dispatchAppState}}>
      <Router>
        <Route path="/" component={Header}/>

        <Switch>
          <Route exact path="/" render={ routerProps => {
            return <HomePage loading={loading} data={data} error={error} content={content} {...routerProps}/>
          }}/>
          <Route path="/user-stories" render={() => <div>User stories</div>}/>
          <Route path="/about" render={() => <div>About</div>}/>
        </Switch>
      </Router>
    </AppState.Provider>
  )

}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
