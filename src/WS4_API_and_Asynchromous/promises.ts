
import axios from 'axios';
import * as readline from 'readline-sync';

const url = 'https://api.apilayer.com/fixer';
const key = ['h11fdin4p9BTsWwVHfMfgoBCvIHrAnFs'];

const getInput = (question: string) => new Promise<string>( (resolve) => {
	const convertTo = readline.question(question);
  console.log(`Enter Input handler, convert question ${question} into ${convertTo}`)
  
  resolve(convertTo);
});

const checkValidCurrencyCode = (code: string) => {
  console.log('Checking Valid Currency Code...');
  return new Promise<string>((resolve, reject) =>{
    axios.get(`${url}/symbols`, {
      headers: {
        apikey: key
      }
    }).then(({data, status}) => {
      if(status===200){
        console.log(`Successfully get currency data: {data}`)
        const currency = data.symbolcodes;
        console.log(`Eenter Validation of Curr COde with currency: ${JSON.stringify(currency)}`)
        if(!currency.hasOwnProperty(code))
          reject (new Error(`invalid currency code ${code}`));
        else 
          resolve(code);
      }
      reject('Connection Error');      
    }).catch((err) => {
      reject(err);
    })
  })
}

const getData = (code: string) => {
  console.log('Retrieving the rate...');
  return new Promise((resolve, reject) =>{
    axios.get(`${url}/latest?base=HKD&symbols=${code}`, {
      headers: {
        apikey: key
      }
    }).then(({data, status}) => {
      if(status===200){
        resolve(data);
      } else {
        reject('Connection Error');
      }
    }).catch((err) => {
      reject(err);
    })
  })
}

const printObject = (data: any) => new Promise<any>( resolve => {
	const indent = 2;
	const str = JSON.stringify(data, null, indent);
	console.log(str);
	resolve(null);                                      
});

const exit = () => new Promise( () => {
	process.exit();
})

getInput('enter currency: ')
	.then(checkValidCurrencyCode)
	.then(getData)
	.then(printObject)
	.then(exit)
	.catch( err => console.error(`error: ${err.message}`))
	.then(exit);
