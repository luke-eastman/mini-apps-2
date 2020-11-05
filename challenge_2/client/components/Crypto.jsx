import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Crypto = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/closing'
    })
    .then(res => {
      setPrices(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);


  return (
    <h1>More Crypto</h1>
  );
}

export default Crypto;