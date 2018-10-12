/**
 * PrmoiseSerial is a function that accepts an array of functions each having a promise returned.
 * We call them according to our will to solve them sequentially.
 * @param { Array } funcs The array of functions passed to this method, where each function returns a Promise.
 * @return { Array } The Array containing resolved promises as a one Promise which is thenable.
 */

const PromiseSerial = funcs => {
  funcs.reduce((promise, func) => {
    promise.then( result => func().then( data => result.push(data)))
  }, Promise.resolve([]))
};

// Usage

const urls = ['/url1', '/url2', '/url3'];

const funcs = urls.map( url => () => fetch(url));

PromiseSerial(funcs).then( resultArray => console.log(resultArray)).catch( error => new Error());