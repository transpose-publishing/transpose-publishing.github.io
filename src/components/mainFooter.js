import React from 'react';
import {Link} from "react-router-dom";
import {iconAssetPath} from "../constants";
import {getContent} from '../utils';

const {content} = getContent();
const {home_page, footer_database_link, about_page, twitter_link} = content;


export default function MainFooter () {
  return (
    <div className="main-footer">
      <div className="footer-content">
        <Link to={home_page.path}>{home_page.title}</Link>
        <a href={footer_database_link.link}>{footer_database_link.text}</a>
        <Link to={about_page.path}>{about_page.title}</Link>
        <a href={twitter_link} target="_blank"><img src={`./${iconAssetPath}/twitter.png`}/></a>
      </div>
      <div className="copyright-bar">
        <span>{content.copyright_statement}</span>
      </div>
    </div>
  )
}
