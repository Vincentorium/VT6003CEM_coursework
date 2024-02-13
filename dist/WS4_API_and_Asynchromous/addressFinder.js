"use strict";

var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const addressLocation = async address => {
  const url = "https://api.maptiler.com/geocoding/".concat(address, ".json?key=JssPszrNlv49UZP5Bj0T");
  try {
    const {
      data,
      status
    } = await _axios.default.get(url, {});
    console.log("".concat(status));
    console.log(data); // JSON Object
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
  }
  let address = process.argv[2];
  /* we need to remove the single quotes from the string */
  address = address.replace(/'/g, '');
  console.log("@@@ address you enter is ".concat(address));
  addressLocation(address).then(data => {
    console.log("".concat(data.features[0].center, ", ").concat(data.features[0].place_name));
  });
} catch (err) {
  console.log("err msg is: ".concat(err));
}