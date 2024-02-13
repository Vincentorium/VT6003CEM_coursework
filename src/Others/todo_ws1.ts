import * as readline from 'readline-sync';

const items : string[]= [];
let input: string;


const isDuplicate = (item: any, items: any[]): boolean => {
  for (const ele of items) {
    if (ele === item) {
      console.log(`${item} is a duplicate.`);
      return true;
    }
  }
  return false;
};
do {
	input = String(readline.question('enter command: ')).trim()
	if (input.indexOf('add ') === 0) {
		const space: number = input.indexOf(' ')
		const item: string = input.substring(space).trim()
		if(items.indexOf(item)>0){
			console.log("duplicated")
		}else{
				console.log(`adding "${item}"`)
		items.unshift(item)
		}
	}
	if (input.indexOf('list') === 0) {
		for (let i=0; i< items.length; i++) {
			console.log(`${i}. ${items[i]}`)
		}
	}
} while (input !== 'exit')
