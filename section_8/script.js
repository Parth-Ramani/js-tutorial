///
const name ="john"
const first=()=>{
    let a=1
    const b=second(7,9)
    a= a+b
    return a
}

const second=(x,y)=>{
    var c=2
return c
}
const x=first()

function ab(){
    console.log(nn)

}
const nn = [1, 2, 3, 4, 5]
ab()


// global and local scope

let globalVar = "global"
function myFunction() {
  let localVar = "local"
  console.log(globalVar) // global
  console.log(localVar) // local

  function nestedFunction() {
    console.log(globalVar) // global
    console.log(localVar) // local
  }
  nestedFunction()
}

// hoisting

// variable 


let app1= 'MyApp'
const app2 = 'MyApp'
var app = 'MyApp'
console.log(app)


// with functions

function appf() {
  console.log('MyApp')
}

const appExpression = function() {
  console.log('MyApp')
}

var app4 = function() {
  console.log('MyApp')
}   
app4()
appf()




/// this keyword examples
// in function expression


const myFun = function() {
  console.log(this); // Window object
};

myFun();// undefined

const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

person.greet(); // Hello, my name is John and I am 30 years old.

let n = 10

const obj={
    b:34,
    calc : function(){
        console.log(this)
    }

}

obj.calc()


// in arrow function

const myFun2 = () => {
  console.log(this); // Window object
};

myFun2(); // window object

const obj2={
    name:'John',
}

obj2.num = obj.b // borrowing b from obj
console.log('borrowed value: ', obj2.num) // borrowed value:  34
obj2.num //



// arguments keyword

function myFunction(a, b) {
  console.log(arguments); // Arguments object
  console.log(a); // 1
  console.log(b); // 2
}

myFunction(1, 2);


// rest and spread operators



function myFunction2(...args) {
  console.log(args); // [1, 2, 3, 4, 5]
}

myFunction2(1, 2, 3, 4, 5);

// const argFun =()=>{
//     console.log(arguments)
// }
// argFun(1,2,3,4,5) // not working



const arr = [1, 2, 3, 4, 5,6];

const arrfunc =function(arr){
    console.log(arr) // [1, 2, 3, 4, 5]
}

arrfunc(arr)

// primitive vs reference types

let a = 10;
let y = a;

y = 20;

// console.log(x); // 10
// console.log(y); // 20
// const obj1 = { name: 'John' };
// const obj2 = obj1;

// obj2.age = 45;

// console.log(obj1.age); // 45
// console.log(obj2.age); // 45


// primitive types vs objects in practice

const jessica ={
  firstName: 'Jessica',
  lastName: 'Smith',
  age: 28,
}


const jessicaCopy = Object.assign({},jessica);
jessicaCopy.firstName = 'william';
console.log(jessicaCopy)
console.log(jessica)
