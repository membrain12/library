const addBookBtn = document.querySelector('#addBook');
const dialog = document.querySelector('dialog');

addBookBtn.addEventListener('click', addBookToLibrary);

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  dialog.showModal();
}

function displayBooks() {

}