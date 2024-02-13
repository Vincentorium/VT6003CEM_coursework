"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const readline = __importStar(require("readline-sync"));
const url = 'https://api.apilayer.com/fixer';
const key = ['h11fdin4p9BTsWwVHfMfgoBCvIHrAnFs'];
const getInput = (question) => new Promise((resolve) => {
    const convertTo = readline.question(question);
    console.log(`Enter Input handler, convert question ${question} into ${convertTo}`);
    resolve(convertTo);
});
const checkValidCurrencyCode = (code) => {
    console.log('Checking Valid Currency Code...');
    return new Promise((resolve, reject) => {
        axios_1.default.get(`${url}/symbols`, {
            headers: {
                apikey: key
            }
        }).then(({ data, status }) => {
            if (status === 200) {
                console.log(`Successfully get currency data: {data}`);
                const currency = data.symbolcodes;
                console.log(`Eenter Validation of Curr COde with currency: ${JSON.stringify(currency)}`);
                if (!currency.hasOwnProperty(code))
                    reject(new Error(`invalid currency code ${code}`));
                else
                    resolve(code);
            }
            reject('Connection Error');
        }).catch((err) => {
            reject(err);
        });
    });
};
const getData = (code) => {
    console.log('Retrieving the rate...');
    return new Promise((resolve, reject) => {
        axios_1.default.get(`${url}/latest?base=HKD&symbols=${code}`, {
            headers: {
                apikey: key
            }
        }).then(({ data, status }) => {
            if (status === 200) {
                resolve(data);
            }
            else {
                reject('Connection Error');
            }
        }).catch((err) => {
            reject(err);
        });
    });
};
const printObject = (data) => new Promise(resolve => {
    const indent = 2;
    const str = JSON.stringify(data, null, indent);
    console.log(str);
    resolve(null);
});
const exit = () => new Promise(() => {
    process.exit();
});
getInput('enter currency: ')
    .then(checkValidCurrencyCode)
    .then(getData)
    .then(printObject)
    .then(exit)
    .catch(err => console.error(`error: ${err.message}`))
    .then(exit);
