import React from 'react';
import {iconAssetPath} from "./constants";

export default function Paging ({page, totalPages, setPage}) {
  const pagesArray = Array(totalPages + 1).fill(null);

  return (
    <div className="paging-container">
      <button onClick={() => page > 0 && setPage(page - 1)}>
        <img className="page-arrow left-arrow" src={`./${iconAssetPath}/page-arrow.png`}/>
      </button>

      {pagesArray.map( (_, i) =>
        <button
          key={i}
          className={`page-button ${i === page ? 'active-page' : ''}`}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </button>
      )}

      <button onClick={() => page < totalPages && setPage(page + 1)}>
        <img className="page-arrow right-arrow" src={`./${iconAssetPath}/page-arrow.png`}/>
      </button>
    </div>
  )
}
