'use strict';

const score0El =document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNewGameBtn = document.querySelector('.btn--new')
const btnRollDiceBtn = document.querySelector('.btn--roll')
const btnHoldBtn = document.querySelector('.btn--hold')
const currentScore0El = document.getElementById('current--0')
score0El.textContent = 0
score1El.textContent = 0
let currentScore = 0
// diceEl.style.display = 'none'
diceEl.classList.add('hidden')


btnRollDiceBtn.addEventListener('click',()=>{
    let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice

)
    diceEl.classList.remove('hidden')

    diceEl.src = `dice-${dice}.png`
    currentScore += dice
    if(dice!== 1){
        currentScore0El.textContent = currentScore
    }else{
        
    }
    
})