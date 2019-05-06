import "@babel/polyfill";
import './styles/index.scss';

import React, {useEffect, useState, useReducer, useMemo} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './homePage';
import UserStories from './userStories';
import AboutPage from './aboutPage';
import Header from "./header";
import MainFooter from './mainFooter';
import Glossary from './glossary';
import {fetchContent, fetchData} from './googleApi';
import {CompareContext, compareReducer} from './compareController';




export const ContentContext = React.createContext({});

function MemoizedHomePage(props) {
  return useMemo(() => <HomePage {...props}/>, Object.values(props))
}

function App () {
  const [compare, dispatchCompareAction] = useReducer(compareReducer, []);
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

  return (
    <ContentContext.Provider value={content}>
      <CompareContext.Provider value={{compare, dispatchCompareAction}}>
        <Router>
          <Route path="/" component={Header}/>

          <Switch>
            <Route exact path="/" render={() =>
              <MemoizedHomePage loading={loading} data={data} error={error} content={content}/>
            }/>

            <Route path="/glossary/:anchor" render={(routerProps) =>
              <Glossary content={content} anchor={routerProps.match.params.anchor} routerProps={routerProps} />}
            />

            <Route path="/glossary" render={() =>
              <Glossary content={content}/>}
            />

            <Route path="/user-stories" render={() => <UserStories/>}/>
            <Route path="/about" render={() => <AboutPage/>}/>
          </Switch>
        </Router>

        <MainFooter/>
      </CompareContext.Provider>
    </ContentContext.Provider>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
