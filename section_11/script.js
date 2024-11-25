'use strict';

/////////////////////////////////////////////////

/////////////////////////////////////////////////
//Lectures

const currencies =new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'British Pound'],
])

const movements=[200,450,-400,3000,-650,-130,-190,70,1300]


let str ='hello world'
// console.log(movements.reverse())
// console.log(movements.concat(str))
// console.log(movements.join('-'))
console.log(movements)
// console.log(movements.slice(0,2))

movements.forEach((movement) =>
movement+=movement)
console.log(movements)


// forEach in Maps and sets

currencies.forEach((key, value)=>{
console.log(`${key}: ${value}`)
})

const move =movements.reduce((i,acc, account)=>{
  console.log(`index ${i} ${account}`)
return acc+ account
},5)
console.log(move)
const max = movements.reduce((acc,mov)=>{
  return acc >mov ? acc : mov
},movements[0])
console.log(max)

const max1 = movements.reduce((acc, mov, index) => {
  console.log(`Step ${index}: Comparing acc=${acc} with mov=${mov}`);
  
  if (acc > mov) {
    console.log(`--> acc (${acc}) is greater, keeping acc.`);
    return acc;
  } else {
    console.log(`--> mov (${mov}) is greater, updating acc.`);
    return mov;
  }
}, movements[0]);

console.log(`Maximum value is: ${max1}`);


const calc = movements.filter((mov=> mov<0)).map((mov, i,arr)=>{console.log(arr); return mov *1.1})

console.log(calc)
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////

const displayMovement =function(movements){
  containerMovements.innerHTML = ''
  console.log(containerMovements.innerHTML)

movements.forEach((movement,i)=>{
const type = movement >0? 'deposit' : 'withdrawal';
  let html =`
<div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${i+1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}</div>
        </div>`;

        containerMovements.insertAdjacentHTML('afterbegin',html)

})
}

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num *2); 
// console.log(doubled); // [2, 4, 6]

const calcPrintBalance = function(movements){
  const balance = movements.reduce((acc,mov)=>{

    return acc + mov

  })
  labelBalance.textContent = `${balance} EUR`
}



const calcDisplaySummary=function(currAcc){
const income = currAcc.movements.filter((mov)=> {return mov> 0}).reduce((acc,mov)=> acc+mov, 0);
labelSumIn.textContent = `${income}€`
const outcome =currAcc.movements.filter((mov)=> {return mov< 0}).reduce((acc,mov)=> acc+mov, 0);
labelSumOut.textContent = `${Math.abs(outcome)}€`

const interest = 
currAcc.movements
.filter((mov)=>  mov> 0)
.map((deposit)=> deposit * currAcc.interestRate/100).filter((int, i,arr)=> { console.log(arr); return int>=1 })
.reduce((acc ,int)=> acc+int, 0);
labelSumInterest.textContent = `${interest}€`
}

const user = "Steven Thomas Williams"
console.log(accounts)
const createUsername =function(accs){

  accs.forEach((acc)=>{
    acc.username = acc.owner.toLowerCase().split(' ').map((ch)=>ch[0]).join('')
  })
 
}
createUsername(accounts)
console.log(accounts)

let currentAccount;
btnLogin.addEventListener('click',(e)=>{
  e.preventDefault();

  currentAccount =accounts.find((account)=>
    account.username === inputLoginUsername.value
  )
  console.log(currentAccount)
  console.log('LOGIN')
if (currentAccount?.pin ===  Number(inputLoginPin.value)){
 
  inputLoginUsername.value = inputLoginPin.value ='';
  inputLoginPin.blur()
labelWelcome.textContent = `welcome back,${ currentAccount.owner.split(' ')[0]}`
console.log(labelWelcome.textContent)
containerApp.style.opacity = 100
displayMovement(currentAccount.movements)
calcPrintBalance(currentAccount.movements)
calcDisplaySummary(currentAccount)

}

})

