let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-icon');

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY > 0);
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');

});
menu.addEventListener('click',()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

var homeSwiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
var comingSwiper = new Swiper(".coming-container", {
     
  spaceBetween:20,
  loop:true,
  autoplay:{
      delay:55000,
      disableOnInteraction:false,
},
centeredSlides:true,
breakpoints:{
  0:{
      slidesPerView:2,
  },
  568:{
      slidesPerView:3,
  },
  768:{
      slidesPerView:4,
  },
  968:{
      slidesPerView:5,
  },
}
}
);