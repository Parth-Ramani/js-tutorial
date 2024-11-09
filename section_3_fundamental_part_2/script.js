'use strict';


// all reserved words in JavaScript
const reservedWords = [
  'abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch',
  'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
  'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally',
  'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof',
  'int', 'interface', 'let', 'new', 'null', 'package', 'private', 'protected', 'public',
  'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw',
  'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while',
  'with', 'yield']


  // functions
// function declaration


// fruitPrcessor(10, 5); // hoisting function 

// const process = fruitPrcessor(15, 10); // hoisting function call
// console.log(process); // 15 10

function fruitPrcessor(oranges, apples) {
    console.log(oranges, apples);
    const juice = `juice from ${oranges} oranges and ${apples} apples`;
    return juice;
}

fruitPrcessor(10, 5);

const process = fruitPrcessor(15, 10);
console.log(process);


// function expression

const calcAge = function (age) { // function expression is not hoisted
  return age * 2;
}

const calc = calcAge(20);
console.log(calc);// 40



// arrow function

const calcAgeArrow = age => // arrow function is shorter and more concise
 age * 2;

// const calcArrow = (age) => age * 2; // same as above but with explicit parameter declaration

const calcArrow = calcAgeArrow(20);
console.log(calcArrow); // 40

// with multiple parameters
const yearsUntilRetirement = (age, retirementAge) => {
  const ageDiff = retirementAge - age;
  return ageDiff;
}



const yearsUntilRetirements = yearsUntilRetirement(40, 65);
console.log(yearsUntilRetirements); // 25



// function calling another function

const cutpieces=(fruits)=>{
  return fruits * 4
}

const totalFruits = function(oragnes,apples){
  const fruit1 = cutpieces(oragnes);
  const fruit2 = cutpieces(apples);
  const juice = `juice from ${fruit1} oranges and ${fruit2} apples`;
  return juice;
}
// totalFruits(10, 5); 
console.log(totalFruits(10, 5)); // juice from 40 oranges and 20 apples 





// Arrays examples

const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // apple
console.log(fruits.length); // 3

fruits[1] = 'grape';
console.log(fruits); // ['apple', 'grape', 'orange']

// arrays with mulatiple data types

const mixedArray = ['apple', 1, true, null, undefined];

console.log(mixedArray); // ['apple', 1, true, null, undefined]





// array methods and properties all in JavaScript

console.log(fruits.includes('banana')); // true
console.log(fruits.indexOf('banana')); // 1

console.log(fruits.reverse()); // ['orange', 'grape', 'apple']
console.log(fruits); // ['orange', 'grape', 'apple']

console.log(fruits.push('peach')); // 5
console.log(fruits); // ['apple', 'grape', 'orange', 'peach']

console.log(fruits.pop()); // 'peach'
console.log(fruits); // ['apple', 'grape', 'orange']

const newArray = fruits.slice(1); // ['grape', 'orange'] from the index 1 to the end
console.log(newArray);


// splice() method
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
console.log("increment element", colors[0+1]);          // ["red", "green", "blue", "yellow", "purple"]
let removedColors = colors.splice(1, 2); // Start at index 1, remove 2 elements
console.log(colors);          // ["red", "yellow", "purple"]
console.log(removedColors);    // ["green", "blue"]


// original array ['apple', 'grape', 'orange']
const newArray2 = fruits.splice(1, 1, 'kiwi'); // ['apple', 'kiwi', 'orange'] from the index 1 to remove 1 element and replace it with 'kiwi'
console.log(newArray2);


// mutator methods all - change the original array
// push() – Adds one or more elements to the end.
// pop() – Removes the last element.
// shift() – Removes the first element.
// unshift() – Adds one or more elements to the beginning.
// splice() – Adds/removes elements at a specific index.
// splice syntax: array.splice(start, deleteCount, item1, item2,...)

// sort() – Sorts elements in place.
// sort() syntax: array.sort([compareFunction])
// sort() example:
// const sortedNumbers = numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
// reverse() – Reverses the array.
// copyWithin() – Copies part of an array within the array.
// fill() – Fills elements with a static value. 


const numbers = [1, 2, 3, 4, 5];

numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.unshift(0); // [0, 1, 2, 3, 4, 5, 6]


// Accessor Methods (do not modify the original array):

// concat() – Joins two or more arrays.
// slice() – Returns a shallow copy of part of the array.
// includes() – Checks if an array includes a certain element.
// indexOf() – Returns the first index of an element.
// lastIndexOf() – Returns the last index of an element.
// join() – Joins all elements into a string.
// toString() – Converts the array to a string.
// toLocaleString() – Converts elements to a localized string.


// Mutator Methods (modify the original array):
// Iteration Methods (typically used for looping):

// forEach() – Executes a function for each element.
// map() – Creates a new array with the results of a function.
// filter() – Creates a new array with elements that pass a test.
// reduce() – Applies a function to reduce the array to a single value.
// reduceRight() – Similar to reduce() but from right-to-left.
// some() – Checks if at least one element meets a condition.
// every() – Checks if all elements meet a condition.
// find() – Returns the first element that meets a condition.
// findIndex() – Returns the index of the first element that meets a condition.
// keys() – Returns an iterator with keys.
// values() – Returns an iterator with values.
// entries() – Returns an iterator with [key, value] pairs.
// flat() – Flattens nested arrays.
// flatMap() – Maps and flattens the result.


/// Objects

const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  friends: ['Jane', 'Bob'],
};

person.greet(); // Hello, my name is John
person.name = 'parth';
console.log(person.name); // parth
// person["name"]= "parth"
person.greet(); // Hello, my name is parth
console.log(person['name']
)

console.log(person)


console.log(` ${person.name} as ${person.friends.length} friends  and best friend is ${person.friends[0]}`)




const person2 = {
  name: 'John',
  birthYear: 1991,
  calcAge: function() {
this.age =    2024 - this.birthYear
    return this.age
  },
}
console.log(person2.calcAge()) // 33
console.log(person2.age) 


const person3 = {
  name: 'John',
  birthYear: 1991,
  calcAge: function() {
return ` ${this.name} is ${2024-this.birthYear} years old teacher and he has a drivers license`}
  
}


console.log(person3.calcAge())