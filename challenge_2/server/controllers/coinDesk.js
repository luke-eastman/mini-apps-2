const axios = require('axios');

const getClosingPrices = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json'
    })
    .then(res => {
      var pricesByDate = [];
      for (var key in res.data.bpi) {
        pricesByDate.push({date: key, price: res.data.bpi[key]});
      }
      resolve(pricesByDate);
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports.getClosingPrices = getClosingPrices;