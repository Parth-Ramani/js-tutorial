"use strict";

//default parameters

function greet(name = "World", age = 30) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet(); // Hello, World! You are 30 years old.

// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum, //object literal
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

// how passing arguments works value and reference

const person = { name: "John" };

function changeName(obj) {
  obj.name = "Jane";
  console.log(obj); // { name: 'Jane' }
}

changeName(person);

//
const flight = "LH234";
const jonas = {
  name1: "John",
  passport: "12345",
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH235"; //// copy of original value  from flight flightNum is completely different  value
  passenger.name = "Mr. " + passenger.name1;
  if (passenger.passport === "12345") {
   console.log('check in')
  } else {
    console.log("wrong passport");
  }
};

checkIn(flight, jonas);
// flightNum = flight
console.log(jonas)
console.log(flight)

// higher order function

// Higher-Order Function Example
function multiplyBy(factor) {
    return function (number) {
      return number * factor; // Returns a new function
    };
  }
  
  const double = multiplyBy(2); // Returns a function that doubles a number
  console.log(double(5)); // 10



/// Simple function which returns the value
function addNumbers(a, b) {
    return a + b; // Returns the sum of a and b
  }
  
  const result = addNumbers(5, 3); // Call the function with arguments 5 and 3
  console.log(result); // Output: 8




  // Callback function definition
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Higher-order function that uses the callback
  function processUserInput(callback) {
    const userName = "Alice"; // Simulate getting a user input
    callback(userName); // Call the callback function with user input
  }
  
  // Pass the `greet` function as a callback
  processUserInput(greet);
  // Output: Hello, Alice!
  

  function one(){
    console.log('one')
  }

  function two(one){
    console.log('two')
    one()
  }
   two(one) 

