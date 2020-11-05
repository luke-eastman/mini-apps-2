const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

const addDaily = (symbol, day) => {
  return new Promise((resolve, reject) => {
    client.set(symbol, day, (err, res) = {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

const getForSymbol => (symbol) => {
  return new Promise((resolve, reject) => {
    client.get(symbol, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res)
      }
    });
  });
}

module.exports.addDaily = addDaily;
module.exports.getForSymbol = getForSymbol;