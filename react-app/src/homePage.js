import React, {Fragment} from 'react';

const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek/edit#gid=0';

export default function HomePage ({loading, data, error}) {
  return (
    <div>
      <p>Hello World!</p>
      <p>{loading ? 'Fetching spreadsheet data, please wait...' : 'Tada!'}</p>
      {!loading &&
      <div>
        {error
          ? 'Oops, something went wrong!'
          : <Fragment>
            {!!data.length && data.map( item => <div>{item.name}-{item.age}</div>)}
            <br/>
            <p>Try it out! Go to the source spreadsheet below and add some names / ages</p>
            <a target="_blank" href={spreadSheetUrl}>{spreadSheetUrl}</a>
          </Fragment>}
      </div>}
    </div>
  )
}
