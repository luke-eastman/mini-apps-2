const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const dataController = require('./controllers/coinDesk.js')

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/closing', (req, res) => {
  dataController.getClosingPrices()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(500).send(err);
  })
});

app.listen(port, () => {
  console.log('listening on port:', port);
});