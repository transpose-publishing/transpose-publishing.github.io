import React from 'react';
import {iconAssetPath} from "../../constants";

export default function Paging ({page, totalPages, setPage}) {
  if(totalPages === 0) return null;

  let index = 1;
  let pagesArray = Array(totalPages - 1).fill(null).map(_ => {
    index++;
    return index;
  });

  let rightDots, leftDots;
  if(totalPages > 13 && totalPages - page > 7) {
    rightDots = true;
  }
  if(totalPages > 13 && page > 6) {
    leftDots = true
  }

  if(totalPages > 13 && page > totalPages - 8) {
    pagesArray = pagesArray.slice(totalPages - 12, totalPages - 2)
  } else if(totalPages > 13 && page > 6) {
    pagesArray = pagesArray.slice(page - 5, page + 4)
  } else if(totalPages > 13) {
    pagesArray = pagesArray.slice(0, 10)
  }

  return (
    <div className="paging-container">
      {page !== 0 &&
        <button onClick={() => setPage(page - 1)}>
          <img className="page-arrow left-arrow" src={`./${iconAssetPath}/page-arrow.png`}/>
        </button>}


      <button
        className={`page-button ${0 === page ? 'active-page' : ''}`}
        onClick={() => setPage(0)}
      >
        1
      </button>

      {leftDots && <span className='paging-dots'>...</span>}

      {pagesArray.map( (i) =>
        <button
          key={i}
          className={`page-button ${i - 1 === page ? 'active-page' : ''}`}
          onClick={() => setPage(i - 1)}
        >
          {i}
        </button>
      )}

      {rightDots && <span className='paging-dots'>...</span>}

      {totalPages > 13 &&
        <button
          className={`page-button ${totalPages - 1 === page ? 'active-page' : ''}`}
          onClick={() => setPage(totalPages - 1)}
        >
          {totalPages}
        </button>}

      <button className={`arrow-button ${totalPages - 1 === page ? 'hidden' : ''}`} onClick={() => setPage(page + 1)}>
        <img className="page-arrow right-arrow" src={`./${iconAssetPath}/page-arrow.png`}/>
      </button>

    </div>
  )
}
