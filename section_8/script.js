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