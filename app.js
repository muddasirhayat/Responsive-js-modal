let card = document.querySelector('.Card');
let cardBtn = document.querySelector('.CardBtn');
let modalCard = document.querySelector('.ModalCard');
let modalBtn = document.querySelector('.ModalBtn');



function ModalHandler() {
    card.style.transform = 'rotate(360deg)';
    card.style.transition = '2s';
    card.style.opacity = '0';
    modalCard.style.opacity = '1';
    modalCard.style.pointerEvents = 'visible';
    modalCard.style.transition = '2s';
}

function ModalOffHandler() {
    modalCard.style.transform = 'rotate(360deg)';
    modalCard.style.transition = '2s';
    modalCard.style.opacity = '0';
    card.style.opacity = '1';
    card.style.pointerEvents = 'none';
    card.style.transition = '2s';
}