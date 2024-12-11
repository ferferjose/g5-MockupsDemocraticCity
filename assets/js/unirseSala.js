document.addEventListener("DOMContentLoaded", () => {
// Referencias al modal y botones
const modalUnirseSala = document.getElementById('modalUnirseSala');
const unirseSalaButton = document.getElementById('unirseSalaButton');
const closeModalUnirseSala = document.getElementById('closeModalUnirseSala');
const unirseSalaForm = document.getElementById('unirseSalaForm');

// Abrir modal
unirseSalaButton.addEventListener('click', () => {
    modalUnirseSala.style.display = 'block';
});

// Cerrar modal
closeModalUnirseSala.addEventListener('click', () => {
    modalUnirseSala.style.display = 'none';
});

});