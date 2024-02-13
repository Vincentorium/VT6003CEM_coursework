"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const exchange = (symbol) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.apilayer.com/fixer/latest?base=EUR&symbols=${symbol}`;
    const options = {
        url: url,
        headers: {
            apikey: [YourAPIKey]
        }
    };
    try {
        const { data, status } = yield axios_1.default.get(url, options);
        console.log(`${status}`);
        return data;
    }
    catch (err) {
        if (axios_1.default.isAxiosError(err)) {
            return err.message;
        }
        else {
            return err;
        }
    }
});
try {
    if (process.argv.length < 3) {
        throw 'missing parameter';
    }
    else {
        const symbol = process.argv[2].toUpperCase();
        exchange(symbol).then((data) => {
            console.log(data);
        });
    }
}
catch (err) {
    console.log(`${err} Usage: currency [toSymbols]`);
}
