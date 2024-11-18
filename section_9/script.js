"use strict";

//destructuring arrays

const numbers = [1, 2, 3, 4, 5];

const [r, , s, ...d] = numbers;

console.log(r); // 1
console.log(s); // 3
console.log(d); // [4, 5]

// arrays in object



const obj = {
    name: "John",
    age: 30,
    city: "New York",
    arr: ["John", "winning"],
    arr2:['willy', 'winning'],
    names :function(name1,name2){
        return [this.arr[name1], this.arr2[name2] ]
    }
  };
  
  // Logging the array
  console.log(obj.arr); // ["John", "winning"]
  
  // Destructuring the array
  let [sec, main] = obj.arr;
  console.log(sec, main); // John winning
  


  // Swapping the variables
  [sec, main] = [main, sec];
  console.log(sec, main); // winning John
  
let [name1,name2]= obj.names(0,0)
console.log(name1,name2); //

// nested arrays
const nested =[1,2,[3,4]]

const [a,,[,b]] =nested
console.log(a,b)// 1,4

const [p, q, j=1]= [7,8]  
console.log(p, q,j)


// destructuring with object

const user = {
    name3: "John",
    age: 30,
    city: "New York",
  };
  
//   // Without destructuring
//   const name = user.name;
//   const age = user.age;
//   console.log(name, age); // John 30
  
  // With destructuring
  let { name3, age } = user;
  console.log(name3, age); // John 30

//   //default values
//     { name3, country = "USA" } = user;
//   console.log(country); // USA

  // renaming properties
  const { name3: userName } = user;
console.log(userName); // John

// extract from nested object
const person = {
    name: "Alice",
    address: { city: "Paris", country: "France" },
  };
  const { address: { city, country } } = person;
  console.log(city, country); //  Paris France


  // Use destructuring in function parameters:


  function greet({ name3, age }) {
    console.log(`Hello ${name3}, you are ${age} years old.`);
  }
  greet(user)

  