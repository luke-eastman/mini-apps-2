import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import Search from './Search.jsx';

const HistoricalEventsFinder = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/events?description_like=Antiochus'
    })
    .then(result => {
      setResults(result.data)
    })
  }, [])

  return (
    <div>
      <Search />
      <div>HELLO</div>
    </div>
  );
}

export default HistoricalEventsFinder;