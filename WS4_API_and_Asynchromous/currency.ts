import axios from 'axios';

const exchange = async (symbol: string) => {
  const url = `https://api.apilayer.com/fixer/latest?base=EUR&symbols=${symbol}`;
  const options = {
    url: url,
    headers: {
      apikey: [YourAPIKey]
    }
  };
  try{
    const { data, status } = await axios.get(url, options);
    console.log(`${status}`);
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
}

try {
  if (process.argv.length < 3) {
    throw 'missing parameter'
  } else {
    const symbol = process.argv[2].toUpperCase();
    exchange(symbol).then((data)=> {
          console.log(data);
    })
  }
} catch (err: any) {
  console.log(`${err} Usage: currency [toSymbols]`)
}
