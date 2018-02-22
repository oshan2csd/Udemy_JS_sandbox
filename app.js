//=======================================
//using browser console

/*
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
*/


//==========================================
//var, let, const
//var & let works same in most cases, except scope
//var name = 'Oshan Silva';// strings can be double or single quotes
//console.log(name);

//variable conventions
//can not start with numbers
//letters, $, numbers are ok

//CONST
//const student = 'oshan';
//console.log(student);
//can not reassigne
//student = 'kasuni';

//can not initialize without a value (declaration required)
//const car;

// //objects
// const person = {
//   name: 'kasuni',
//   age:30
// }

// console.log(person);

// //for const objects, object itself can not re assign
// //but, data inside object can changed
// //EVEN IF OBJECT IS "CONST"

// person.name = 'oshan';
// person.age = 35;
// console.log(person);

// //same thing applied for arrays as well
// //const doesn't mean it has to remain unchanged
// //it just can not re assign
// const numbers = [1,2,3,4,4];
// numbers.push(8);
// numbers.pop();
// console.log(numbers);


//==========================================
//Data types

  //PRIMITIVE
      //String
      const name = 'oshan';
      //number
      const age = 45;
      //boolean
      const haskids = true;
      //Null
      const car = null;
      //undefined
      var student;
      //symbol
      const symb = Symbol();

  //REFERENCE TYPES - Objects
      //Array
      const hobbies = ['movies', 'music'];
      //Object
      const address = {
        city:'Mel',
        state:'VIC'
      }
      //Date
      const today = new Date();
      
console.log(today);
console.log(typeof today);
