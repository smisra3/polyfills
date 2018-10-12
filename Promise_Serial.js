const urls = ['/url1', '/url2', '/url3'];

const funcs = urls.map( url => () => fetch(url));

const PromiseSerial = funcs => {
  funcs.reduce((promise, func) => {
    promise.then( result => func().then( data => result.push(data)))
  }, Promise.resolve([]))
};