// Custom select
const element = document.querySelector('[data-select]');
const choices = new Choices(element, {
   searchEnabled: false,
});


// Form btns 
const roomBtns = document.querySelectorAll('.appartments-rooms ul li button');

for (let i = 0; i < roomBtns.length; i++) {
   roomBtns[i].addEventListener('click', () => {
      roomBtns[i].classList.toggle('active');
   });
}


// Mobile menu
const menuBtn = document.querySelector('.header-burger');
const menuContent = document.querySelector('.header-nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('active');
   body.classList.toggle('lock');
   menuContent.classList.toggle('active')
});


// Menu Slider
const menuSwiper = new Swiper('.exclusive-offers-cards', {
   loop: true,
   slidesPerView: "auto",
   spaceBetween: 20,
 });


