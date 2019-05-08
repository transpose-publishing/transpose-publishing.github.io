import React from 'react';
import {Link} from "react-router-dom";
import {iconAssetPath} from "../constants";


export default function Header ({pathname}) {
  const homeClass = `header-link ${pathname === '/' ? 'active' : ''}`;
  const glossaryClass = `header-link ${pathname === '/glossary' ? 'active' : ''}`;
  const userStoriesClass = `header-link ${pathname === '/user-stories' ? 'active' : ''}`;
  const aboutClass = `header-link ${pathname === '/about' ? 'active' : ''}`;
  return (
    <div className="header">
      <div className="link-container">
        <Link to="/" className={homeClass}>Home</Link>
        <Link to="/glossary" className={glossaryClass}>Glossary</Link>
        <Link to="/user-stories" className={userStoriesClass}>User Stories</Link>
        <Link to="/about" className={aboutClass}>About</Link>
      </div>
      <img className="header-logo" src={`./${iconAssetPath}/Transpose-Logo.png`}/>
    </div>)
}
