var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(document).ready(function () {
  $('.client-slider').slick({
    centerMode: true,
    centerPadding: '160px',
    slidesToShow: 12,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

let category1 = document.querySelector('.category-service');
let category2 = document.querySelector('.category-grade');

function categoryNoActive() {
  category1.classList.remove('category-active');
  category2.classList.remove('category-active');
}
function categoryActive1() {
  category2.classList.remove('category-active');
  category1.classList.add('category-active');
}
function categoryActive2() {
  category1.classList.remove('category-active');
  category2.classList.add('category-active');
}



const serviceBtn = document.querySelectorAll('.service__button');
const serviceToggle = document.querySelectorAll('.service__toggle');


document.querySelectorAll('.service__button').forEach(btn => {
  btn.addEventListener('click', function (e) {
    this.classList.toggle('service__button--active');
    this.nextElementSibling.classList.toggle('service__toggle--active');
  });
});
