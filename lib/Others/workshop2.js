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
Object.defineProperty(exports, "__esModule", { value: true });
// can't be negati
const readline = __importStar(require("readline-sync"));
const items = [];
let input;
const multiply = (a, b = 1) => {
    return a * b;
};
do {
    input = String(readline.question('enter command: ')).trim();
    if (input.indexOf('product') === 0) {
        // error handle
        let a = Number(readline.question('enter a: ')); //.trim
        let b = Number(readline.question('enter b: ')); // .trim
        // const space: number = input.indexOf(' ')
        // const itemA: string = input.substring(a).trim()
        // const itemB: string = input.substring(b).trim()
        const result = multiply(a, b);
        console.log(`result of Product ${a} and ${b} is ${result}.`);
    }
    if (input.indexOf('list') === 0) {
        for (let i = 0; i < items.length; i++) {
            console.log(`${i}. ${items[i]}`);
        }
    }
} while (input !== 'exit');
