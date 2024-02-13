"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sentiment_1 = __importDefault(require("sentiment"));
const sentiment = new sentiment_1.default("");
const minParam = 3;
try {
    console.log(process.argv);
    if (process.argv.length < minParam)
        throw new Error('missing parameters');
    const words = process.argv.slice(minParam - 1).join(' ');
    console.log(words);
    const result = sentiment.analyze(words);
    console.log(result);
}
catch (err) {
    console.log(err.message);
}
