import UI from './modules/UI.js';
import Router from './modules/router.js';

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Display current date and time
document.addEventListener('DOMContentLoaded', UI.showCurrentDateandTime);
// Event: Add a book
document
  .querySelector('#book-form')
  .addEventListener('submit', (e) => UI.addBookToCollection(e));
// Event: Input onchange save data to localstorage
document
  .querySelector('#title')
  .addEventListener('change', UI.updateInputFields);
document
  .querySelector('#author')
  .addEventListener('change', UI.updateInputFields);
// Event: show list section
document
  .querySelector('#list')
  .addEventListener('click', (e) => Router.getSectionID(e));
// Event: show add new book section
document
  .querySelector('#add-new')
  .addEventListener('click', (e) => Router.getSectionID(e));
// Event: show list section
document
  .querySelector('#contact')
  .addEventListener('click', (e) => Router.getSectionID(e));

window.addEventListener('load', () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const storedFormData = localStorage.getItem('formData');
  if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    title.value = parsedFormData.title;
    author.value = parsedFormData.author;
  }
});
