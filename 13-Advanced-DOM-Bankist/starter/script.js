'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content')


///////////////////////////////////////
// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////////////////////////////////////////////////
// Button Scrolling 
btnScrollTo.addEventListener('click', function (e) {
  // e.preventDefault();

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);


  // Scrolling 
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);


  // Old School way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way
  section1.scrollIntoView({ behavior: 'smooth', });
});



///////////////////////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth',});
//   });
// });


// Event Deligation
// 1. Add event listener to common parent element 
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth', });
  }
});


// Tabbed Component

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes 
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});


// Menu Fade Animation

const handelHover = function(e){
  // console.log(this, e.currentTarget);

  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}


// Passing "argument" into handler
nav.addEventListener('mouseover', handelHover.bind(0.5));

nav.addEventListener('mouseout', handelHover.bind(1));



// Bad way
// nav.addEventListener('mouseover', function(e){
//   handelHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function(e){
//   handelHover(e, 1);
// });



// Sticky navigation 
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function(){
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky'); 
    else nav.classList.remove('sticky');
})

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


/*
// Selecting elements'
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
header.after(message);

// Delete element
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.remove();

  message.parentElement.removeChild(message);
});



// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', '#5ec576');

// Attributes 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes


// Don't use
// logo.className = 'jonas';


const h1 = document.querySelector('h1');

// h1.addEventListener('click', function(e){
//   e.preventDefault();

// });


// const alertH1 =  function(e){
//   alert('addEventListener: Great! You are reading the heading! :D');
  
// };

// h1.addEventListener('mouseenter', alertH1);



// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 4000);



// Old school way
// h1.onmouseenter = function(e){
//   alert('onmouseenter: Great! You are reading the heading! :D');
  
// };


// rgb(255, 255, 255);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`; 

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

*/
/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes);
console.log(h1.children); // works only for direct children
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'yellow';

// Going upwards: parents  
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

*/






















































