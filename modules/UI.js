import Store from './localStorage.js';
import Book from './books.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const dt = DateTime.now();
const currentDateTime = dt.toLocaleString(DateTime.DATETIME_MED);
// UI class: Handles UI tasks
export default class UI {
  static storedBooks = Store.getBooks();

  static displayBooks() {
    const bookList = document.querySelector('.book-list');
    if (UI.storedBooks.length === 0) {
      bookList.innerHTML = 'No books added!';
      bookList.classList.add('book-list-error-msg');
    } else {
      bookList.classList.remove('book-list-error-msg');
      bookList.innerHTML = '';
      UI.storedBooks.forEach((book) => {
        const bookListItem = document.createElement('div');
        bookListItem.classList.add('book-list-item');
        bookListItem.innerHTML = `"${book.title}" by ${book.author}`;
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        const removeBookWithTitle = book.title;
        removeBtn.addEventListener('click', () => {
          UI.removeBookFromCollection(removeBookWithTitle);
        });
        bookListItem.appendChild(removeBtn);
        bookList.appendChild(bookListItem);
      });
    }
  }

  static addBookToCollection(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    if (title === '' || author === '') {
      UI.showAlert('please fill all fields', 'danger');
    } else {
      const book = new Book(title, author);
      Store.addBook(book);
      UI.storedBooks = Store.getBooks();
      UI.showAlert('Book added successfully!', 'success');
      UI.displayBooks();
      UI.clearFields();
    }
  }

  static removeBookFromCollection = (removeBookWithTitle) => {
    if (removeBookWithTitle) {
      Store.removeBook(removeBookWithTitle);
      UI.storedBooks = Store.getBooks();
      UI.showAlert('Book deleted successfully!', 'success');
      UI.displayBooks();
    }
  };

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    localStorage.removeItem('formData');
  };

  static updateInputFields = () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const formData = { title, author };
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  static showCurrentDateandTime = () => {
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    dateTimeContainer.appendChild(document.createTextNode(currentDateTime));
    const header = document.querySelector('header');
    header.insertAdjacentElement('afterend', dateTimeContainer);
  };

  static showAlert = (message, className) => {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${className}`;
    alertDiv.appendChild(document.createTextNode(message));
    const header = document.querySelector('header');
    header.insertAdjacentElement('afterend', alertDiv);

    setTimeout(() => alertDiv.remove(), 1000);
  };
}
