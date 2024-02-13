"use strict";

var _axios = _interopRequireDefault(require("axios"));
var readline = _interopRequireWildcard(require("readline-sync"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const url = 'https://api.apilayer.com/fixer';
const key = ['h11fdin4p9BTsWwVHfMfgoBCvIHrAnFs'];
const getInput = question => new Promise(resolve => {
  const convertTo = readline.question(question);
  console.log("Enter Input handler, convert question ".concat(question, " into ").concat(convertTo));
  resolve(convertTo);
});
const checkValidCurrencyCode = code => {
  console.log('Checking Valid Currency Code...');
  return new Promise((resolve, reject) => {
    _axios.default.get("".concat(url, "/symbols"), {
      headers: {
        apikey: key
      }
    }).then(_ref => {
      let {
        data,
        status
      } = _ref;
      if (status === 200) {
        console.log("Successfully get currency data: {data}");
        const currency = data.symbolcodes;
        console.log("Eenter Validation of Curr COde with currency: ".concat(JSON.stringify(currency)));
        if (!currency.hasOwnProperty(code)) reject(new Error("invalid currency code ".concat(code)));else resolve(code);
      }
      reject('Connection Error');
    }).catch(err => {
      reject(err);
    });
  });
};
const getData = code => {
  console.log('Retrieving the rate...');
  return new Promise((resolve, reject) => {
    _axios.default.get("".concat(url, "/latest?base=HKD&symbols=").concat(code), {
      headers: {
        apikey: key
      }
    }).then(_ref2 => {
      let {
        data,
        status
      } = _ref2;
      if (status === 200) {
        resolve(data);
      } else {
        reject('Connection Error');
      }
    }).catch(err => {
      reject(err);
    });
  });
};
const printObject = data => new Promise(resolve => {
  const indent = 2;
  const str = JSON.stringify(data, null, indent);
  console.log(str);
  resolve(null);
});
const exit = () => new Promise(() => {
  process.exit();
});
getInput('enter currency: ').then(checkValidCurrencyCode).then(getData).then(printObject).then(exit).catch(err => console.error("error: ".concat(err.message))).then(exit);