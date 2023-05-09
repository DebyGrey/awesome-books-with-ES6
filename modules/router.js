export default class Router {
  static currentSection = () => {
    const currentSection = localStorage.getItem('currentSection');
    if (currentSection === 'list') {
      Router.showListSection();
    } else if (currentSection === 'add-new') {
      Router.showAddNewBookSection();
    } else if (currentSection === 'contact') {
      Router.showContactSection();
    }
  }

  static getSectionID = (e) => {
    e.preventDefault();
    const currentSection = e.target.id;
    localStorage.setItem('currentSection', currentSection);
    Router.currentSection();
  }

  static showListSection = () => {
    const listSection = document.querySelector('.book-list-section');
    const addNewBookSection = document.querySelector('.add-new-book-section');
    const contactSection = document.querySelector('.contact-section');
    const contactLink = document.querySelector('#contact');
    const addNewLink = document.querySelector('#add-new');
    const listLink = document.querySelector('#list');
    listSection.classList.remove('hide-section');
    addNewBookSection.classList.add('hide-section');
    contactSection.classList.add('hide-section');
    listLink.classList.add('active');
    contactLink.classList.remove('active');
    addNewLink.classList.remove('active');
  }

  static showAddNewBookSection = () => {
    const listSection = document.querySelector('.book-list-section');
    const addNewBookSection = document.querySelector('.add-new-book-section');
    const contactSection = document.querySelector('.contact-section');
    const contactLink = document.querySelector('#contact');
    const addNewLink = document.querySelector('#add-new');
    const listLink = document.querySelector('#list');
    listSection.classList.add('hide-section');
    addNewBookSection.classList.remove('hide-section');
    contactSection.classList.add('hide-section');
    listLink.classList.remove('active');
    contactLink.classList.remove('active');
    addNewLink.classList.add('active');
  }

  static showContactSection = () => {
    const listSection = document.querySelector('.book-list-section');
    const addNewBookSection = document.querySelector('.add-new-book-section');
    const contactSection = document.querySelector('.contact-section');
    const contactLink = document.querySelector('#contact');
    const addNewLink = document.querySelector('#add-new');
    const listLink = document.querySelector('#list');
    listSection.classList.add('hide-section');
    addNewBookSection.classList.add('hide-section');
    contactSection.classList.remove('hide-section');
    listLink.classList.remove('active');
    contactLink.classList.add('active');
    addNewLink.classList.remove('active');
  }
}
