//using browser console
console.log('hello world123');
console.log(123);
console.log(true);

var greetings = "good morining";
console.log(greetings);
console.log([1,2,3,4,5]);
console.log(["a","b","c","d"]);
console.log([1,2,"w",4]);

//objects
console.log({a:1, b:2});
console.table({a:1, b:2});

//messages
console.error("error in here");//useful for debugging
console.warn('test warning');
console.clear();

//timer
//useful for calculating time for a particular code
console.time('hello');
  console.log('hello world123');
  console.log('hello world123');
  console.log('hello world123');
  console.log('hello world123');
  console.log('hello world123');
  console.log('hello world123');
  console.log('hello world123');
console.timeEnd('hello');
