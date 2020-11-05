require('dotenv').config()
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const coinDesk = require('./controllers/coinDesk.js')
const cryptoCompare = require('./controllers/cryptoCompare.js');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/closing', (req, res) => {
  coinDesk.getClosingPrices()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});

app.get('/api/closing/:symbol', (req, res) => {
  cryptoCompare.getClosingPricesBySymbol(req.params.symbol)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });
});

app.listen(port, () => {
  console.log('listening on port:', port);
});