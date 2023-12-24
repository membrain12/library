const addBookBtn = document.querySelector('#addBook');
const dialog = document.querySelector('dialog');

addBookBtn.addEventListener('click', addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  dialog.showModal();
}

function displayBooks() {

}