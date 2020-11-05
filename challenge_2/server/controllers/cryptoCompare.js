const axios = require('axios');
const db = require('../../db/index.js');

const getClosingPricesBySymbol = (symbol) => {
  return new Promise((resolve, reject) => {
    db.getForSymbol(symbol)
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
  });
}

module.exports.getClosingPricesBySymbol = getClosingPricesBySymbol;