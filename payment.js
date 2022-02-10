const submitBtn = document.querySelector('.submit-btn');
// const closeBtn = document.querySelector('#close');

submitBtn.addEventListener('click', () => {
  window.location.href = 'store.html';
  alert('Thank you for your purchase');
});

// closeBtn.addEventListener('click', () => {
//   modal_container.classList.remove('show');
// });

// Get the element
let modal = document.getElementById('modalId-container');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
};
