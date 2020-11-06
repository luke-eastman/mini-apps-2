import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CryptoChart from './CryptoChart.jsx';
const Crypto = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/closing/BTC'
    })
    .then(res => {
      setPrices(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div>
      <CryptoChart prices={prices}/>
    </div>
  );
}

export default Crypto;