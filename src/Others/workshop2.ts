// can't be negati
import * as readline from 'readline-sync';

const items : string[]= [];
let input: string;

const multiply = (a:number, b:number = 1)=>{
    return a*b;
}


do {
	input = String(readline.question('enter command: ')).trim()
	if (input.indexOf('product') === 0) {

    // error handle
      let a: number = Number(readline.question('enter a: '))//.trim
      let b: number = Number(readline.question('enter b: '))// .trim


		// const space: number = input.indexOf(' ')
		// const itemA: string = input.substring(a).trim()
		// const itemB: string = input.substring(b).trim()
        const result:number = multiply(a,b);
		console.log(`result of Product ${a} and ${b} is ${result}.`)
		
	}
	if (input.indexOf('list') === 0) {
		for (let i=0; i< items.length; i++) {
			console.log(`${i}. ${items[i]}`)
		}
	}
} while (input !== 'exit')