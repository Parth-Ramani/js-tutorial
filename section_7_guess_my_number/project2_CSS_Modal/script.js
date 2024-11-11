"use strict";

const modalBtn = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
console.log(modal);
console.log(modalBtn);

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);


document.addEventListener('keydown',(e)=>{
    console.log("pressed a key");
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})