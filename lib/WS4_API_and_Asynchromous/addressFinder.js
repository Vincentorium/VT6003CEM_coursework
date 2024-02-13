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
const addressLocation = (address) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.maptiler.com/geocoding/${address}.json?key=JssPszrNlv49UZP5Bj0T`;
    try {
        const { data, status } = yield axios_1.default.get(url, {});
        console.log(`${status}`);
        console.log(data); // JSON Object
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
    let address = process.argv[2];
    /* we need to remove the single quotes from the string */
    address = address.replace(/'/g, '');
    console.log(`@@@ address you enter is ${address}`);
    addressLocation(address).then((data) => {
        console.log(`${data.features[0].center}, ${data.features[0].place_name}`);
    });
}
catch (err) {
    console.log(`err msg is: ${err}`);
}
