// Store: Handles storage
export default class Store {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook = (book) => {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = (title) => {
    let books = Store.getBooks();
    books = books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
