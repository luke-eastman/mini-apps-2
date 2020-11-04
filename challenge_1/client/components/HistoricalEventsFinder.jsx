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
      url: `http://localhost:3000/events?_page=${page}&_sort=date&_order=asc&q=${searchTerm}`
    })
    .then(result => {
      var data = cleanResults(result.data);
      setPages(Math.ceil(result.headers['x-total-count'] / 10));
      setResults(data);
    })
  }

  const cleanResults = (results) => {
    for (var i = 0; i < results.length; i++) {
      if (!results[i].date.includes('/')) {
        if (Number(results[i].date) < 0) {
          results[i].date = `${Number(results[i].date) * -1} BC`
        } else {
          results[i].date = `${results[i].date} AD`
        }
      } else {
        var date = results[i].date.split('/');
        if (Number(date[0]) < 0) {
          results[i].date = `${date[1]}/${date[2]}/${Number(date[0]) * - 1} BC`
        } else {
          results[i].date = `${date[1]}/${date[2]}/${Number(date[0])} AD`
        }

      }
    }
    return results;
  }

  const handlePageChange = (event) => {
    setPage(event.selected + 1);
  }

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <Results results={results} page={page} pages={pages} handlePageChange={handlePageChange} />
    </div>
  );
}

export default HistoricalEventsFinder;