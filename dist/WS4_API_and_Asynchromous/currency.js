"use strict";

var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const exchange = async symbol => {
  const url = "https://api.apilayer.com/fixer/latest?base=EUR&symbols=".concat(symbol);
  const options = {
    url: url,
    headers: {
      apikey: [YourAPIKey]
    }
  };
  try {
    const {
      data,
      status
    } = await _axios.default.get(url, options);
    console.log("".concat(status));
    return data;
  } catch (err) {
    if (_axios.default.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
};
try {
  if (process.argv.length < 3) {
    throw 'missing parameter';
  } else {
    const symbol = process.argv[2].toUpperCase();
    exchange(symbol).then(data => {
      console.log(data);
    });
  }
} catch (err) {
  console.log("".concat(err, " Usage: currency [toSymbols]"));
}