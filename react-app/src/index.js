import "@babel/polyfill";
import './styles/index.scss';

import React, {useEffect, useState, useReducer, useMemo} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './homePage';
import Header from "./header";
import {fetchContent, fetchData} from './googleApi';


const initialState = {
  compare: []
};

//TODO: Move reducer to separate file and set up action constants
function appStateReducer (state, action) {
  switch (action.type) {
    case 'ADD_COMPARE':
      if(state.compare.length === 3) return state;
      return {...state, compare: [...state.compare, action.item]};
    case 'REMOVE_COMPARE':
      const newCompare = [...state.compare];
      newCompare.splice(action.index, 1);
      return {...state, compare: newCompare};
    default:
      return state;
  }
}

export const AppState = React.createContext(initialState);
export const Content = React.createContext({});

function App () {
  const [appState, dispatchAppState] = useReducer(appStateReducer, initialState);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); //TODO: set up error handling for fetch catches

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
    fetchContent().then( content => setContent(content))
  }, []);

  const MemoizedHomePage = useMemo(() =>
    <HomePage loading={loading} data={data} error={error} content={content}/>,
    [loading, data, error, content]);

  return (
    <Content.Provider value={content}>
      <AppState.Provider value={{appState, dispatchAppState}}>
        <Router>
          <Route path="/" component={Header}/>

          <Switch>
            <Route exact path="/" render={() => MemoizedHomePage}/>
            <Route path="/user-stories" render={() => <div>User stories</div>}/>
            <Route path="/about" render={() => <div>About</div>}/>
          </Switch>
        </Router>
      </AppState.Provider>
    </Content.Provider>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
