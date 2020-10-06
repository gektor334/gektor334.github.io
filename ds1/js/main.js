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

const portfoliobtn = document.querySelector('.portfolio__button');
portfoliobtn.onclick = function (e) {
  if (e.target.classList.contains('portfolio__btn')) {
    for (let i = 0; i < portfoliobtn.children.length; i++) {
      portfoliobtn.children[i].classList.remove('portfolio__btn--active');
    }
    e.target.classList.add('portfolio__btn--active');
  }
}

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

document.querySelector('#portfolio1').onclick = categoryNoActive;
document.querySelector('#portfolio2').onclick = categoryActive1;
document.querySelector('#portfolio3').onclick = categoryActive2;