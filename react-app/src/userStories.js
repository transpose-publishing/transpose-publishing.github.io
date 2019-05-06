import React, {Fragment} from 'react';
import StandardBanner from './standardBanner';
import content from './content/content';
import {userStoryCards, userStoryTable} from './content/userStoriesModels';
import {iconAssetPath} from './constants';


function WhoItem ({icon, text}) {
  return (
    <div className="card-item">
      <img src={`./${iconAssetPath}/${icon}`}/>
      <p>{text}</p>
    </div>
  )
}


export default function UserStories () {
  return (
    <Fragment>
      <StandardBanner/>

      <div className="standard-content">
        <div className="card-section">
          <h3 className="user-stories-section-header">{content.who_header}</h3>

          {userStoryCards.map( ({icon, text}) => <WhoItem icon={icon} text={text}/>)}

        </div>

        <div className="table-section">
          <h3 className="user-stories-section-header">{content.why_header}</h3>
          <p className="table-description">{content.table_description}</p>

          <table>
            <tr className="user-story-table-header">
              <th className="group-header">Group</th>
              <th className="type-header">Type</th>
              <th className="use-case-header">Use case</th>
            </tr>

            {userStoryTable.map(({group, type, useCase}) =>
              <tr>
                <td>{group}</td>
                <td>{type}</td>
                <td>{useCase}</td>
              </tr>)}
          </table>
        </div>
      </div>
    </Fragment>
  )
}
