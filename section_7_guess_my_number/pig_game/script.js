'use strict';
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El =document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNewGameBtn = document.querySelector('.btn--new')
const btnRollDiceBtn = document.querySelector('.btn--roll')
const btnHoldBtn = document.querySelector('.btn--hold')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
score0El.textContent = 0
score1El.textContent = 0
// diceEl.style.display = 'none'
diceEl.classList.add('hidden')

let scores = [0, 0]// Array for scores of both players
let currentScore = 0
let activePlayer = 0

btnRollDiceBtn.addEventListener('click',()=>{
    let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)
    diceEl.classList.remove('hidden')

    diceEl.src = `dice-${dice}.png`
    if(dice!== 1){
        currentScore += dice// Add dice value to current score
document.getElementById(`current--${activePlayer}`).textContent = currentScore // Update current score on UI
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0 // Reset current score to 0
        currentScore = 0
activePlayer = activePlayer === 0?1:0 // Switch active player
player0El.classList.toggle('player--active')
player1El.classList.toggle('player--active')
        
    }
    
})


btnHoldBtn.addEventListener('click',()=>{
document.getElementById(`score--${activePlayer}`).textContent =  currentScore
activePlayer = activePlayer === 0?1:0 // Switch active player
player0El.classList.toggle('player--active')
player1El.classList.toggle('player--active')
})