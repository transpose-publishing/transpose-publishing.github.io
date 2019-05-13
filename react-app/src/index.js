import "core-js";
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
import {fetchData} from './googleApi';
import {CompareProvider} from './compareController';
import {getContent} from './utils';

const {content} = getContent();

function App () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //TODO: set up error handling for fetch catches

  useEffect(() => {
    fetchData().then( dataArray => {
      setData(dataArray);
      setLoading(false);
    })
  }, []);

  return (
    <CompareProvider>
      <Router>
        <Route path="/" render={ ({location}) => <Header pathname={location.pathname}/> }/>

        <Switch>
          <Route exact path={content.home_page.path} render={() =>
            <HomePage loading={loading} data={data}/>
          }/>

          <Route path={`${content.more_info_page.path}/:anchor`} render={ ({match}) =>
            <MoreInformation anchor={match.params.anchor}/>}
          />

          <Route path={content.more_info_page.path} render={() =>
            <MoreInformation />}
          />

          <Route path={content.user_stories_page.path} render={() => <UserStories/>}/>
          <Route path={content.about_page.path} render={() => <AboutPage/>}/>
        </Switch>
      </Router>

      <MainFooter/>
    </CompareProvider>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
