const addBookBtn = document.querySelector('#addBook');
const dialog = document.querySelector('dialog');
const bookContainer = document.querySelector('.book-container');

addBookBtn.addEventListener('click', addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

const hp = new Book("Harry Potter and the Sorceror's Stone", "JK Rowling", 1200, true);
const hp2 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", 1200, true);

myLibrary.push(hp);
myLibrary.push(hp2);

function addBookToLibrary() {
  dialog.showModal();
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement('div');
    let title = document.createElement('p')
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('button');

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    book.appendChild(title);
    book.appendChild(author);

    book.style.class
    bookContainer.appendChild(book);
  }
}

displayBooks();