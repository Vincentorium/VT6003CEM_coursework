"use strict";

var _sentiment = _interopRequireDefault(require("sentiment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const sentiment = new _sentiment.default("");
const minParam = 3;
try {
  console.log(process.argv);
  if (process.argv.length < minParam) throw new Error('missing parameters');
  const words = process.argv.slice(minParam - 1).join(' ');
  console.log(words);
  const result = sentiment.analyze(words);
  console.log(result);
} catch (err) {
  console.log(err.message);
}