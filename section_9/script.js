"use strict";

//destructuring arrays

const numbers = [1, 2, 3, 4, 5];

const [r, , ,s, ...d] = numbers;

console.log(r); // 1
console.log(s); //
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

  // spread operator

  // copy arrayss

  const arr1 = [1, 2, 3];
  const arr2 = [...arr1]; // [1, 2, 3]
  console.log(arr1);
  console.log(arr2); // [1, 2, 3]
  const arr3 =[4,5,6]

  // combine arrays
  const combined = [...arr2,...arr3] 
  console.log(combined) //


// iterables: arrays strings but not objects

const  per ='zillion'
let inArr =[per]
console.log(inArr) //

//spread operator in objects

const person1 = {
    name: "John",
    age: 30,
    city: "New York",
  };

  const person2 = {
    ...person1,
    country: "USA",
  };
  console.log(person2); // { name: "John", age: 30, city: "New York", country: "USA" }

  const objCopy = {...person1}
  objCopy.name = 'Zillon'
  console.log(objCopy) // { name: 'Zillon', age: 30, city: 'New York', country: 'USA' }
  console.log(person1) // { name: 'John', age: 30, city: 'New York', country: 'USA' }

  // Spread  because on RIGHT side of

  const array = [1,2,3,...[4,5,6]]
  console.log(array) // [1, 2, 3, 4, 5, 6]

//   spread because on LEFT side of

const [one, two,...rest]= [1,2,3,4,5,6]
console.log(...rest)// 3,4,5,6
console.log([one]) 
console.log(two)


// objects in the object of opening weekdays

const weekdays ={
    mon:{
        day: "Monday",
        temp: 20
    },
    tue:{
        day: "Tuesday",
        temp: 25
    },
    wed:{
        day: "Wednesday",
        temp: 22
    }

}

const {wed,...weeks}= weekdays
console.log(wed) // { day: 'Wednesday', temp: 22 }
console.log(weeks) // { mon: { day: 'Monday', temp: 20 }, tue: { day: 'Tuesday', temp: 25 } }


// OR and AND

console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log("177",1 && 0) //

console.log(true || true) // true






console.log(false|| false) //

// nullishing operator

let aa = null
let bb = undefined

console.log(aa ?? bb) // 1
let cb;
console.log(typeof cb)// un


// for of loops

const colors = ["red", "blue", "green"];

for (let color of colors) {
  console.log(color);
}

for (let color of colors.entries()) {
    console.log(`${color[0]+1} ${color[1]}`); 
    
  }


  // optional chaining ?.
  
  const user1 = {
    name: "John",
    address: {
      city: "New York"
    }
  };
  
  console.log(user1?.address?.city); // "New York"
  console.log(user1?.address?.zip); // undefined (no error)
  console.log(user1?.contact?.phone); // undefined (no error)
  

  //  Safe Method Calls

  const user2 = {
    greet() {
      return "Hello!";
    }
  };
  
  console.log(user2.greet?.()); // "Hello!"
  console.log(user2.sayGoodbye?.()); // undefined (no error)
  

//Dynamic Property Access

const key = "city";
const user4 = {
  address: {
    city: "Paris"
  }
};

console.log(user4?.address?.[key]); // "Paris"
console.log(user4?.contact?.[key]); // undefined (no error)


//Optional Chaining with Arrays

const users = [
    { name: "Alice" },
    null,
    { name: "Bob" }
  ];
  
  console.log(users[0]?.name); // "Alice"
  console.log(users[1]?.name); // undefined (no error)
  console.log(users[2]?.name); // "Bob"

  
  // Combining with Nullish Coalescing

  const user6 = {
    profile: null
  };
  
  console.log(user6?.profile?.age ?? "No age available"); 
  // "No age available" (because `profile` is null)
  

  const user7 = {
    profile: {
      age: 30
    }
  };
  console.log(user7.profile?.address?.place)


// looping objects  objects key

const user8 = {
    name: "John",
    age: 30,
    address: {
      city: "New York"
    }
  };

 for (const user of Object.keys(user8)) {
    console.log(user)
 }
 // name age address

 // looping objects values
 for (const value of Object.values(user8)) {
    console.log(value)
 } // John 30 { city: 'New York' }

 // looping objects entries
 for (const [key, value] of Object.entries(user8)) {
    console.log(`${key}: ${value}`)
 }       // name: John age: 30 address: { city: 'New York' }

let properties =Object.keys(user8)
console.log(properties)

