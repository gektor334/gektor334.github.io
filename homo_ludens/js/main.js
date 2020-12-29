let slideIndex = 1;
showSlides(slideIndex);
function slideNext() {
  showSlides(slideIndex += 1);
}
try {
  document.querySelector('.childrens-next').onclick = slideNext;
}
catch { }

function slidePrev() {
  showSlides(slideIndex -= 1);
}
try {
  document.querySelector('.childrens-prev').onclick = slidePrev;
}
catch { }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i = '';
  let slides = document.querySelectorAll('.slider-item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  try {
    slides[slideIndex - 1].style.display = "block";
  }
  catch (err) {

  }
}


let slideIndex1 = 1;
showSlides1(slideIndex1);
function slideNext1() {
  showSlides1(slideIndex1 += 1);
}
try { document.querySelector('.childrens-next1').onclick = slideNext1; }
catch { }

function slidePrev1() {
  showSlides1(slideIndex1 -= 1);
}
try { document.querySelector('.childrens-prev1').onclick = slidePrev1; }
catch { }

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i = '';
  let slides = document.querySelectorAll('.slider-item1');
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  try {
    slides[slideIndex1 - 1].style.display = "block";
  }
  catch { }
}


try {
  let more = document.querySelectorAll('.reviews-desc');
  let moreBtn = document.querySelectorAll('.reviews-more');

  for (let btn = 0; btn < moreBtn.length; btn++) {
    moreBtn[btn].onclick = function () {
      if (moreBtn[btn].innerText == 'скрыть') {
        more[btn].style.maxHeight = '4vw';
        moreBtn[btn].innerHTML = 'показать';
      }
      else {
        more[btn].style.maxHeight = '100%';
        moreBtn[btn].innerHTML = 'скрыть';
      }
    }
  }
}
catch { }

let cursList = document.querySelector('.curs-list');
document.querySelector('.link-relative').onclick = function () {
  if (cursList.style.display == 'flex') {
    cursList.style.maxHeight = '0';
    setTimeout(() => cursList.style.display = 'none', 800);
  }
  else {
    cursList.style.display = 'flex';
    setTimeout(() => cursList.style.maxHeight = '12vw', 50);
  }
}

document.body.addEventListener('click', (e) => {
  let target = e.target;
  if (target.className == 'curs-list') {
    return;
  }
  else if (target.className == 'link link-relative') {
    return;
  }
  cursList.style.maxHeight = '0';
  setTimeout(() => cursList.style.display = 'none', 800);
});
try {
  let videoBtn = document.querySelector('.go-video');
  videoBtn.onclick = function () {
    let autoPlay = document.querySelector('.go-video iframe');
    autoPlay.src += '?autoplay=1';
    videoBtn.classList.remove('video-before');
    videoBtn.classList.remove('teacher-video-before');
    videoBtn.classList.remove('curs-video-before');
    videoBtn.classList.remove('luba-curs-video');
    videoBtn.classList.remove('singing-video-before');
    videoBtn.classList.remove('childrens-video-before');
  }

  let govideo = document.querySelector('.govideo');
  govideo.onclick = function () {
    let play = document.querySelector('.govideo iframe');
    play.src += '?autoplay=1';
    govideo.classList.remove('tatyana-video');
  }
}
catch { }

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.mobile-menu');
let l1 = document.querySelector('.line-1');
let l2 = document.querySelector('.line-2');
let l3 = document.querySelector('.line-3');
burger.onclick = function () {
  burgerMenu.classList.toggle('active');
  if (burgerMenu.classList.contains('active')) {
    burgerMenu.classList.add('burger-flex');
    setTimeout(() => burgerMenu.style.opacity = '1', 100);
    setTimeout(() => l2.style.opacity = '0', 300);
    setTimeout(() => l1.style.transform = 'rotate(45deg)', 300);
    setTimeout(() => l1.style.marginTop = '9px', 300);
    setTimeout(() => l1.style.width = '25px', 300);
    setTimeout(() => l3.style.transform = 'rotate(-45deg)', 300);
    setTimeout(() => l3.style.marginTop = '-9px', 300);
    setTimeout(() => l3.style.width = '25px', 300);
  }
  else {
    burgerMenu.style.opacity = '0';
    setTimeout(() => burgerMenu.classList.remove('burger-flex'), 600);
    setTimeout(() => l2.style.opacity = '1', 300);
    setTimeout(() => l1.style.transform = 'rotate(0)', 300);
    setTimeout(() => l1.style.marginTop = '0', 300);
    setTimeout(() => l3.style.transform = 'rotate(0)', 300);
    setTimeout(() => l3.style.marginTop = '3px', 300);
    setTimeout(() => l1.style.width = '21px', 300);
    setTimeout(() => l3.style.width = '21px', 300);
  }
}
let cursMobList = document.querySelector('.mobile-link-list');
cursMobList.onclick = function () {
  let listMenu = document.querySelector('.list-script');
  listMenu.classList.toggle('active');
  let deg180 = 'rotate(-180deg)';
  let deg0 = 'rotate(0)';
  if (listMenu.classList.contains('active')) {
    listMenu.classList.add('burger-flex');
    setTimeout(() => document.querySelector('.list-script').style.height = '160px', 100);
    setTimeout(() => document.querySelector('.list-script').style.margin = '20px 0', 300);
    setTimeout(() => document.querySelector('.list-script').style.opacity = '1', 200);
    cursMobList.style.color = '#5a5d73';
    cursMobList.style.setProperty('--sq-transform', deg180);
  }
  else {
    document.querySelector('.list-script').style.height = '0';
    document.querySelector('.list-script').style.margin = '0';
    document.querySelector('.list-script').style.opacity = '0';
    cursMobList.style.color = '#c5c5c5';
    cursMobList.style.setProperty('--sq-transform', deg0);
    setTimeout(() => listMenu.classList.remove('burger-flex'), 500);
  }
}