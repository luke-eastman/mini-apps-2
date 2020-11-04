import React from 'react';
import ReactPaginate from 'react-paginate';

import Result from './Result.jsx';

const Results = ({results, page, pages, handlePageChange}) => {
  if (page === 1) {
    return (
      <div>
        {results.map(result => <Result result={result} />)}
        <ReactPaginate
          onPageChange={handlePageChange}
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={0}
        />
      </div>
    );
  }
  return (
    <div>
      {results.map(result => <Result result={result} />)}
      <ReactPaginate
        onPageChange={handlePageChange}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Results;