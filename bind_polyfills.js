/**
 * This method is the polyfill for the Function.prototype.bind method.
 */

Function.prototype.__bind = function(context) {
    var args = Array.prototype.slice.call(arguments,1),
        fn = this;
    if(typeof fn !== 'function')
        throw new TypeError('Calling method should be a function');
    return function() {
       return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
    };
};


// ============================================== Example to run for polyfill ============================================


var obj =  {
    index: 1,
    getIndex: function() {
      return this.index;
    }
}
console.log(obj.getIndex());
var func = obj.getIndex.__bind(obj);
console.log(func());
