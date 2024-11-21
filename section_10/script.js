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

const greett =function(greeting){
    return function(name){
console.log(`hii ${name} ${greeting}`)
    }
}

const greetHello = greett('Hello')
greetHello('John') // hii John Hello

greett('Hello')('smith') // second argument is the name of the return function


// call method with arguments

function greet1(name) {
  console.log(`hello ${name}`)
}

const obj ={
  name:'joe',
}

greet1.call(obj,obj.name)
console.log(obj)

//
function sayHello(){
  console.log(`hello ${this.name}`)
}

const user={
  name:'john',
}

sayHello.call(user)



//  Passing Arguments with call()

function intro(name,age){
  console.log(`i am ${name} and ${age} years old`)
}

const per={}
intro.call(per,'alliance', 34)
console.log(per)


// borrowing methods with call()
//Here, getDetails is borrowed from car and applied to bike using call(). The this inside getDetails refers to bike now.
const car = {
  brand: 'Tesla',
  model: 'Model 3',
  getDetails: function() {
    console.log(`This is a ${this.brand} ${this.model}.`);
  }
};

const bike={
  brand: 'Harley',
  model: 'Davidson',
}

car.getDetails()
car.getDetails.call(bike)


// apply methods

const person1 = {
  fullName: function(city, country) {
    console.log(`${this.name} from ${city}, ${country}`);
  }
};

const user1 = { name: 'Alice' };

// Using apply() with arguments as an array
person1.fullName.apply(user1, ['New York', 'USA']); 
// Output: Alice from New York, USA


const numbers = [3, 5, 1, 9, 6];

// Using apply() to find the maximum number in an array
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 9
