const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

const addDaily = (symbol, day) => {
  return new Promise((resolve, reject) => {
    client.sadd(symbol, day, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

const compareDates = (a, b) => {
  if (Object.keys(a)[0] < Object.keys(b)[0]) {
    return -1
  } else {
    return 1
  }
}

const getForSymbol = (symbol) => {
  return new Promise((resolve, reject) => {
    client.smembers(symbol, (err, res) => {
      if (err) {
        reject(err);
      } else {
        var parsed = [];
        for (var i = 0; i < res.length; i++) {
          parsed.push(JSON.parse(res[i]))
        }
        parsed = parsed.sort(compareDates)
        resolve(parsed)
      }
    });
  });
}

module.exports.addDaily = addDaily;
module.exports.getForSymbol = getForSymbol;