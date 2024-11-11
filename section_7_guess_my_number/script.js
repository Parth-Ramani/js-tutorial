'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', () => {
const guess = Number(document.querySelector('.guess').value);
console.log(guess);    
if(!guess){
document.querySelector('.message').textContent = 'Please enter a number';
}else if(guess=== secretNumber){
   document.querySelector('.number').textContent=secretNumber;

    document.querySelector('.message').textContent='Congratulations! You guessed the number';

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=score;
    }


    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector('.number').style.width='30rem';


    
}else if(guess> secretNumber){
    if(score >1){
        document.querySelector('.message').textContent='its too high';
        score--;
       document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent= 'you lose the game'
        document.querySelector('.score').textContent=0;

    }
 
}else if(guess<secretNumber){
    if(score >1){
        document.querySelector('.message').textContent='its too low';
        score--;
        document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent= 'you lose the game'
        document.querySelector('.score').textContent=0;

    }

  

}

})

document.querySelector('.again').addEventListener('click',()=>{
    score=20;
secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width='15rem';
    score=20;
    document.querySelector('.score').textContent=score;
})
