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
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          pageClassName={"page"}
          activeClassName={"active"}
          previousClassName={"prev page"}
          nextClassName={"next page"}
          breakClassName={"break page"}
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
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        pageClassName={"page"}
        activeClassName={"active"}
        previousClassName={"prev page"}
        nextClassName={"next page"}
        breakClassName={"break page"}
      />
    </div>
  );
}

export default Results;