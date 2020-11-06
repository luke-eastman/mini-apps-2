require('dotenv').config()

const axios = require('axios');
const db = require('../../db/index.js');
const dayjs = require('dayjs');

const getClosingPricesBySymbol = (symbol) => {
  return new Promise((resolve, reject) => {
    db.getForSymbol(symbol)
    .then(res => {
      var dates = [];
      var prices = [];
      for (var i = 0; i < res.length; i++) {
        dates[i] = Object.keys(res[i])[0];
        prices[i] = Object.values(res[i])[0];
      }
      var daily = {};
      daily['dates'] = dates;
      daily['prices'] = prices;
      resolve(daily);
    })
    .catch(err => {
      reject(err);
    });
  });
}

const getDayFromObject = (obj) => {
  var newObj = {};
  newObj[dayjs(obj.time * 1000).format('YYYY-MM-DD')] = obj.close;
  return newObj;
}

const getClosingsFromWeb = (symbol) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=1000`,
      headers: {
        Apikey: process.env.CRYPTO_COMPARE_KEY
      }
    })
    .then(res => {
      resolve(res.data.Data.Data);
    })
    .catch(err => {
      reject(err);
    });
  });
}

const addDailyClosings = (symbol) => {
  var dailyClosings = [];
  return new Promise((resolve, reject) => {

    getClosingsFromWeb('BTC')
    .then(res => {
      for (var i = 0; i < res.length; i++) {
        dailyClosings.push(getDayFromObject(res[i]));
      }
    })
    .catch(err => {
      console.error(err)
    })
    .then(res => {


      var closings = [];
      for (var day in dailyClosings) {
        closings.push(new Promise((resolve, reject) => {

          db.addDaily(symbol, JSON.stringify(dailyClosings[day]))
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          })
        }));
      }

      Promise.all(closings)
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
    });
  })
}

module.exports.getClosingPricesBySymbol = getClosingPricesBySymbol;
module.exports.addDailyClosings = addDailyClosings;

//addDailyClosings('BTC')

