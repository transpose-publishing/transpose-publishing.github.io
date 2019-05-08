import React from 'react';
import {Link} from "react-router-dom";
import {iconAssetPath} from "../constants";
import content from '../content/content';

const {home_page, more_info_page, user_stories_page, about_page} = content;


export default function Header ({pathname}) {
  const homeClass = `header-link ${pathname === home_page.path ? 'active' : ''}`;
  const glossaryClass = `header-link ${pathname === more_info_page.path ? 'active' : ''}`;
  const userStoriesClass = `header-link ${pathname === user_stories_page.path ? 'active' : ''}`;
  const aboutClass = `header-link ${pathname === about_page.path ? 'active' : ''}`;
  return (
    <div className="header">
      <div className="link-container">
        <Link to={home_page.path} className={homeClass}>{home_page.title}</Link>
        <Link to={more_info_page.path} className={glossaryClass}>{more_info_page.title}</Link>
        <Link to={user_stories_page.path} className={userStoriesClass}>{user_stories_page.title}</Link>
        <Link to={about_page.path} className={aboutClass}>{about_page.title}</Link>
      </div>
      <img className="header-logo" src={`./${iconAssetPath}/Transpose-Logo.png`}/>
    </div>)
}
