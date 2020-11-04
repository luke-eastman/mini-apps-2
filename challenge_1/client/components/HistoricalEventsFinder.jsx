import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import Search from './Search.jsx';

const HistoricalEventsFinder = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/events?_page=${searchPage}&q=${searchTerm}`
    })
    .then(result => {
      console.log(result.headers.link)
      setResults(result.data)
    })
  }, [searchTerm])

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <div>HELLO</div>
    </div>
  );
}

export default HistoricalEventsFinder;