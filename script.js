'use strict';

// Variables which holds the CSS classes for the model
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// The function for the open modal
// Removes the hidden class for the modal
// Removes the hidden class for the overlay
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// The function for the closing modal class
// Adds the hidden class back to the modal
// Adds the hidden class bavk to the overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Setting the modal text to the modal button which is pressed
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Calls the openModal & closeModal on a click eventListener
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling an "Ecape" keypress event
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
