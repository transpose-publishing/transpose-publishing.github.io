import React, {Fragment} from 'react';
import SortArrow from 'components/SortArrow';
import {USER_STORIES_SORT_FIELDS, SORT_ORDER} from 'constants';
import StandardBanner from './standardBanner';
import {getContent, useMergeState, sortGenerator} from '../utils';

const {content, userStoryTable} = getContent();
const {TYPE, GROUP} = USER_STORIES_SORT_FIELDS;
const {ASC, DESC} = SORT_ORDER;


export default function UserStories () {
  const [{field, order}, updateSort] = useMergeState({field: GROUP, order: ASC});

  function toggleSort (field) {
    updateSort(prevSort => ({field, order: field !== prevSort.field ? ASC : (prevSort.order === ASC ? DESC : ASC)}))
  }

  const sortedUserStoryTable = userStoryTable.sort(sortGenerator(field, order));

  return (
    <Fragment>
      <StandardBanner/>

      <div className="standard-content">
        <div className="table-section">
          <h3 className="user-stories-section-header">{content.why_header}</h3>
          <p className="table-description">{content.table_description}</p>

          <table>
            <tr className="user-story-table-header">
              <th className="group-header sort-button" onClick={() => toggleSort(GROUP)}>
                Group
                <SortArrow
                  order={field === GROUP ? order : DESC}
                  active={field === GROUP}/>
              </th>
              <th className="type-header sort-button" onClick={() => toggleSort(TYPE)}>
                Type
                <SortArrow
                  order={field === TYPE ? order : DESC}
                  active={field === TYPE}/>
              </th>
              <th className="use-case-header">Use case</th>
            </tr>

            {sortedUserStoryTable.map(({group, type, use_case}) =>
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
