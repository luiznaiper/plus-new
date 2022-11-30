let burger = document.getElementById('burger');
let nav = document.getElementById('main-nav');

burger.addEventListener('click', function (e) {
  this.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');
