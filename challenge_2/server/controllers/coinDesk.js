const axios = require('axios');

const getClosingPrices = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json'
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports.getClosingPrices = getClosingPrices;