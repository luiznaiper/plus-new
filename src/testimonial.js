/*Testomonial slider*/

let testimoniosContainer = document.querySelectorAll('.testimonios-container');
let testimoniosIndex = 0;

const testimonioNext = () => {
  testimoniosContainer[testimoniosIndex].classList.remove('active');
  testimoniosIndex = (testimoniosIndex + 1) % testimoniosContainer.length;
  testimoniosContainer[testimoniosIndex].classList.add('active');
};

const testimonioPrev = () => {
  testimoniosContainer[testimoniosIndex].classList.remove('active');
  testimoniosIndex =
    (testimoniosIndex - 1 + testimoniosContainer.length) %
    testimoniosContainer.length;
  testimoniosContainer[testimoniosIndex].classList.add('active');
};
