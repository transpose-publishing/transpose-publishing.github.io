import 'utils/polyfills';
import './styles/index.scss';

import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/homePage';
import UserStories from './components/userStories';
import AboutPage from './components/aboutPage';
import Header from "./components/header";
import MainFooter from './components/mainFooter';
import MoreInformation from './components/moreInformation';
import StatsPage from './components/StatsPage';
import {fetchData} from './googleApi';
import {CompareProvider} from './compareController';
import {getContent, ErrorBoundary} from './utils';

const {content} = getContent();

function App () {
  const [loading, setLoading] = useState(content.loading_database);
  const [data, setData] = useState([]);

  useEffect(function fetchData_onMount () {
    const {dataPromise, fetchTimeout} = fetchData();
    dataPromise.then( dataArray => {
      setData(dataArray);
      setLoading(false);
    }).catch( e => {
      setLoading(content.database_loading_error);
      console.error(e)
    });

    fetchTimeout.then(() => {
      setLoading( prevLoading =>
        (prevLoading && prevLoading !== content.database_loading_error)
          ? content.loading_database_long_time
          : prevLoading
      )
    })
  }, []);

  return (
    <CompareProvider>
      <Router>
        <Route path="/" render={ ({location}) => <Header pathname={location.pathname}/> }/>

        <Switch>
          <Route exact path={content.home_page.path} render={({location}) =>
            <HomePage
              loading={loading}
              data={data}
              urlSearchQuery={
                location.search
                  ? decodeURIComponent(new URLSearchParams(location.search).get('search') || '')
                  : ''
              }/>
          }/>

          <Route path={content.more_info_page.path} render={({location}) =>
            <MoreInformation anchor={location.search ? new URLSearchParams(location.search).get('anchor') : null}/>}
          />

          <Route path={content.user_stories_page.path} render={() => <UserStories/>}/>
          <Route path={content.about_page.path} render={() => <AboutPage/>}/>
          <Route path={content.stats_page.path} render={() => <StatsPage/>}/>
        </Switch>

        <MainFooter/>
      </Router>
    </CompareProvider>
  )
}

ReactDom.render(
  <ErrorBoundary><App/></ErrorBoundary>,
  document.getElementById('app')
);
