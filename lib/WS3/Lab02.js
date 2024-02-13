"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// Your code here
// Wait for user's response.
var userName = readline_sync_1.default.question('May I have your name? ');
console.log('Hi ' + userName + '!');
// Handle the secret text (e.g. password).
var favFood = readline_sync_1.default.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
