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
