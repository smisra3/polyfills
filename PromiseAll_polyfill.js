/**
 * NOTE----------- THis is not sequential execution of promises. Just the order is maintained.
 * This is a polyfill for Promises.all which works in exactly the same manner as it's real brother.
 * @param {Array} arrayOfPromises Is the array of promises passed to this method which will return a new promise
 * @return {Promise} Which can be utilised and the reponse will be in the same order in an array in which the promises were index in the passed array.
 */
function PromiseAll(arrayOfPromises) {
  if (Object.prototype.toString.call(arrayOfPromises) !== '[object Array]')
    return false;
  return new Promise(function (resolve, reject) {
    var resultArray = [];
    if (!arrayOfPromises.length)
      resolve(arrayOfPromises);
    var pendingPromises = arrayOfPromises.length;
    arrayOfPromises.forEach(function (promise, index) {
      promise.then(function (result) {
        resultArray[index] = result;
        pendingPromises--;
        if (pendingPromises === 0) {
          resolve(resultArray);
        }
      }, function (error) {
        reject(error);
      });
    });
  });
}
