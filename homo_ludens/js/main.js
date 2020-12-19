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

  console.log('да');
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

let videoBtn = document.querySelector('.about-school__right-video');
videoBtn.onclick = function () {
  let autoPlay = document.querySelector('.about-school__right-video iframe');
  autoPlay.src += '?autoplay=1';
  console.log(autoPlay.src);
  videoBtn.classList.remove('video-before');

}