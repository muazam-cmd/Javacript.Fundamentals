'use strict';

const Modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
    Modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModel = function () {
    Modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', OpenModal);


btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && !Modal.classList.contains('hidden')) {
        closeModel();
    }
})