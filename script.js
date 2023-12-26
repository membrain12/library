const addBookBtn = document.querySelector('#addBook');
const confirmBtn = document.querySelector('#confirmBtn');
const dialog = document.querySelector('dialog');
const bookContainer = document.querySelector('.book-container');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');

addBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

confirmBtn.addEventListener('click', () => {
  addBookToLibrary();
  dialog.close();
  clearForm();
  displayBooks();
});



function clearForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = 0;
}

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.index = -1;
}

//remove these sections when done testing
const hp = new Book("Harry Potter and the Sorceror's Stone", "JK Rowling", 1200, true);
const hp2 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", 1200, false);

myLibrary.push(hp);
myLibrary.push(hp2);

function addBookToLibrary() {
  
  
  let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, true);
  myLibrary.push(book);
}

function displayBooks() {
  bookContainer.replaceChildren();
  
  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement('div');
    let title = document.createElement('p')
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('button');
    let removeBtn = document.createElement('button');

    myLibrary[i].index = i;

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages + " pages";


    read.classList.add("readButton");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove Book";

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
        
        myLibrary[i].read = false;

        read.classList.add("notReadStyle");
      } else {
        read.textContent = "Read";
        read.classList.remove("notReadStyle");

        myLibrary[i].read = true;

        read.classList.add("readStyle");
      }
    });

    removeBtn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(removeBtn);

    book.classList.add("book-card");
    bookContainer.appendChild(book);
  }
}

displayBooks();