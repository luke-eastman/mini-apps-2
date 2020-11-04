import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import Results from './Results.jsx';

const HistoricalEventsFinder = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    getResults();
  }, [searchTerm, page]);

  useEffect(() => {
    if (page > 1) {
      setPage(1);
    }
  }, [searchTerm])

  const getResults = () => {
    axios({
      method: 'get',
      url: `http://localhost:3000/events?_page=${page}&q=${searchTerm}`
    })
    .then(result => {
      setPages(Math.ceil(result.headers['x-total-count'] / 10))
      setResults(result.data)
    })
  }

  const handlePageChange = (event) => {
    setPage(event.selected + 1);
    console.log('page changed to', event.selected + 1)
  }

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <Results results={results} page={page} setPagepages={pages} handlePageChange={handlePageChange} />
    </div>
  );
}

export default HistoricalEventsFinder;