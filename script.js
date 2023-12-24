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
const hp2 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", 1200, false);

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
    pages.textContent = myLibrary[i].pages + " pages";

    read.classList.add("readButton");

    if (myLibrary[i].read == true) {
      read.textContent = "Read";
      read.classList.add('readStyle');
    } else {
      read.textContent = "Not Read";
      read.classList.add('notReadStyle');
    }

    read.addEventListener('click', () => {
      if (read.classList.contains('readStyle')) {
        read.textContent = "Not Read";
        read.classList.remove("readStyle");
        
        
        read.classList.add("notReadStyle");
      } else {
        read.textContent = "Read";
        read.classList.remove("notReadStyle");

        read.classList.add("readStyle");
      }
    });
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);

    book.classList.add("book-card");
    bookContainer.appendChild(book);
  }
}

displayBooks();