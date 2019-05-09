import React, {Fragment} from 'react';
import StandardBanner from './standardBanner';
import content from '../content/content';
import {userStoryCards, userStoryTable} from '../content/userStories';


export default function UserStories () {
  return (
    <Fragment>
      <StandardBanner/>

      <div className="standard-content">
        <div className="table-section">
          <h3 className="user-stories-section-header">{content.why_header}</h3>
          <p className="table-description">{content.table_description}</p>

          <table>
            <tr className="user-story-table-header">
              <th className="group-header">Group</th>
              <th className="type-header">Type</th>
              <th className="use-case-header">Use case</th>
            </tr>

            {userStoryTable.map(({group, type, use_case}) =>
              <tr>
                <td>{group}</td>
                <td>{type}</td>
                <td>{use_case}</td>
              </tr>)}
          </table>
        </div>
      </div>
    </Fragment>
  )
}
