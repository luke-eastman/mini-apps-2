const axios = require('axios');

const getClosingPrices = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=2020-09-05?start=2020-06-01&end=2020-11-05'
    })
    .then(res => {
      resolve(res.data.bpi);
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports.getClosingPrices = getClosingPrices;