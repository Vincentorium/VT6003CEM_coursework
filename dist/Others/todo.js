"use strict";

var readline = _interopRequireWildcard(require("readline-sync"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const items = [];
let input;
do {
  input = String(readline.question('enter command: ')).trim();
  if (input.indexOf('add ') === 0) {
    const space = input.indexOf(' ');
    const item = input.substring(space).trim();
    console.log("adding \"".concat(item, "\""));
    items.push(item);
  }
  if (input.indexOf('list') === 0) {
    for (let i = 0; i < items.length; i++) {
      console.log("".concat(i, ". ").concat(items[i]));
    }
  }
} while (input !== 'exit');