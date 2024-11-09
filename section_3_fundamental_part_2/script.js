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

