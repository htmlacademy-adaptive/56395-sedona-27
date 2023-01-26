let pageBody = document.querySelector('.page__body');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

pageBody.classList.remove('page__body--no-js');
navMain .classList.remove('main-nav--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});
