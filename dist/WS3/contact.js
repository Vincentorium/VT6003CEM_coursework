"use strict";

var readline = _interopRequireWildcard(require("readline-sync"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* This script demonstrates how TypeScript can be used to handle exceptions. */

/* any code that could throw an exception needs to be wrapped in a try block. If any line of code in the try block throws an exception the program immediately jumps to the catch block, passing the Error object thrown. Regardless of whether an error was thrown or not, the code in the finally block is run. */
try {
  const email = String(readline.question('enter email address: '));
  console.log('email is a ' + typeof email + ' and contains ' + email);
  validateEmail(email);
  const score = Number(readline.question('assign score 1-10: '));
  console.log('score is a ' + typeof score + ' and contains ' + score);
  validateScore(score);
  const comment = String(readline.question('enter your comment : '));
  validateComment(comment);
  console.log("Thank you ".concat(email, ". You gave us a rating of ").concat(score, "/10 with the comment \"").concat(comment, "\""));
} catch (err) {
  console.log("".concat(err.name, " thrown"));
  console.log("The error message is: ".concat(err.message));
  console.log(err.stack);
} finally {
  console.log('the script has finished');
}

/**
 * Checks to see if the supplied parameter is formatted as a valid email
 * address.
 * @param   {string} email - The email address to be checked.
 * @returns {bool} the validity of the email address string
 * @throws  {TypeError} if the parameter is not a valid email address.
 */
function validateEmail(email) {
  console.log(email);
  return true;
}

/**
 * Checks to see if the supplied parameter is a valid integer in the range 1-10.
 * @param   {string} score - The user-specified score.
 * @returns {bool} whether the parameter is a valid integer in range
 * @throws  {TypeError} if the parameter is not a valid integer.
 * @throws  {RangeError} if the parameter is not in the range 1-10.
 */
function validateScore(score) {
  const minScore = 0;
  const maxScore = 10;
  if (Number.isNaN(score) || score % 1 !== minScore) {
    throw new TypeError('parameter is not a valid integer');
  }
  if (score < 1 || score > maxScore) {
    throw new RangeError('parameter should be in the range 1-10');
  }
  return true;
}

/**
 * Checks to see if the supplied comment is 'valid'.
 * @param   {string} comment - The user-specified score.
 * @returns {bool} whether the comment is 'valid'
 * @throws  {RangeError} if the comment is not long enough.
 */
function validateComment(comment) {
  const minLen = 5;
  if (comment.length < minLen) {
    throw new RangeError('comment should be at least 5 characters long');
  }
  return true;
}