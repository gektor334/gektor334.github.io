window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let body = document.body;
let loading = document.querySelector('.loading');
let home = document.querySelector('.home');
let office = document.querySelector('.office');
let media = document.querySelector('.media');
let hero = document.querySelector('.hero');
let animateTwo = document.querySelector('.animate-two');
let animateTwoText = document.querySelector('.animate-two__text');
let animateTwoImg = document.querySelector('.animate-two__img');
let t2 = document.querySelector('.t2');
let t3 = document.querySelector('.t3');
body.style.overflow = 'hidden';
home.style.marginTop = '115px';
setTimeout(() => loading.style.opacity = '1', 800);
setTimeout(() => home.style.marginTop = '0', 1200);
setTimeout(() => home.style.marginTop = '-115px', 1700);
setTimeout(() => home.style.marginTop = '-230px', 2200);
setTimeout(() => loading.style.opacity = '0', 2800);
setTimeout(() => hero.style.background = '#1B1C20', 3800);
setTimeout(() => loading.style.display = 'none', 3800);
setTimeout(() => animateTwo.style.display = 'flex', 3800);
setTimeout(() => animateTwo.style.opacity = '1', 4100);
setTimeout(() => t2.style.opacity = '1', 4800);
setTimeout(() => t3.style.opacity = '1', 5500);
setTimeout(() => animateTwoText.style.opacity = '0', 6000);
setTimeout(() => animateTwoText.style.display = 'none', 6500);
setTimeout(() => animateTwoImg.style.display = 'flex', 6500);
setTimeout(() => animateTwoImg.style.opacity = '1', 6700);
setTimeout(() => body.style.overflowY = 'auto', 6700);

//hover block(project-liis)
let hovBlock = document.querySelectorAll('.project-list__block');
let hovTitle = document.querySelectorAll('.project-list__title');
for (let i = 0; i < hovBlock.length; i++) {
  function funcHov() {
    this.classList.add('active-hov');
    hovTitle[i].style.fontWeight = '400';
  }
  function funcClick() {
    if (this.classList.contains('active-hov')) {
      this.classList.remove('active-hov');
      this.classList.remove('active-hov-title');
      this.classList.remove('bg-' + i);
      hovTitle[i].style.fontWeight = '300';
    } else {
      this.classList.add('active-hov');
      this.classList.add('bg-' + i);
      hovBlock[i].classList.add('active-hov-title');
      hovTitle[i].style.fontWeight = '400';
    }
  }
  function funcOffHov() {
    if (!this.classList.contains('active-hov-title')) {
      hovTitle[i].style.fontWeight = '300';
      this.classList.remove('active-hov');
    }
  }
  hovBlock[i].onmouseover = funcHov;
  hovBlock[i].onmouseleave = funcOffHov;
  hovBlock[i].onclick = funcClick;
}
for (let i = 0; i < hovTitle.length; i++) {
  function funcHovTitle() {
    for (let k = 0; k < hovBlock.length; k++) {
      hovBlock[k].classList.remove('bg-' + k);
      hovBlock[k].classList.remove('active-hov-title');
    }
    let sTop = hovBlock[i].getBoundingClientRect();
    console.log(sTop.top);
    hovBlock[i].classList.add('bg-' + i);
    hovBlock[i].classList.add('active-hov-title');
    hovBlock[i].scrollIntoView({ block: "start", behavior: "smooth" });
  }
  hovTitle[i].onmouseover = funcHovTitle;
}



let simplehome = document.querySelector('#simplehome');
simplehome.onmouseenter = function () {
  document.querySelector('.home-text1').style.opacity = '1';
  document.querySelector('.home-text2').style.opacity = '1';
  document.querySelector('#home-card-text').style.opacity = '0';
  setTimeout(() => simplehome.classList.remove('card-noactive1'), 300);
  setTimeout(() => {
    document.querySelector('.hover-home').style.zIndex = '1';
    document.querySelector('.home-img1').style.top = '-150%';
    document.querySelector('.home-img2').style.bottom = '-150%';
  }, 400);
  setTimeout(() => {
    document.querySelector('.hover-home').style.zIndex = '1';
    document.querySelector('.home-img3').style.left = '120%';
    document.querySelector('.home-img4').style.right = '120%';
    document.querySelector('.home-img5').style.right = '120%';
    document.querySelector('.home-img6').style.left = '120%';
    document.querySelector('.home-text1').style.marginLeft = '0';
    document.querySelector('.home-text2').style.marginLeft = '0';
  }, 800);
  setTimeout(() => document.querySelector('.home-text3').style.opacity = '1', 2000);
}

simplehome.onmouseleave = function () {
  document.querySelector('.home-text1').style.opacity = '0';
  document.querySelector('.home-text2').style.opacity = '0';
  simplehome.classList.add('card-noactive1');
  document.querySelector('#home-card-text').style.opacity = '1';
  document.querySelector('.hover-home').style.zIndex = '-1';
  document.querySelector('.home-img1').style.top = '0';
  document.querySelector('.home-img2').style.bottom = '-5px';
  document.querySelector('.home-img3').style.left = '-7vw';
  document.querySelector('.home-img4').style.right = '-6vw';
  document.querySelector('.home-img5').style.right = '-7vw';
  document.querySelector('.home-img6').style.left = '-6vw';
  document.querySelector('.home-text1').style.marginLeft = '-200%';
  document.querySelector('.home-text2').style.marginLeft = '200%';
  document.querySelector('.home-text3').style.opacity = '0';
}



let simplemedia = document.querySelector('#simplemedia');
simplemedia.onmouseenter = function () {
  document.querySelector('.media-text1').style.opacity = '1';
  document.querySelector('.media-text2').style.opacity = '1';
  document.querySelector('#media-card-text').style.opacity = '0';
  setTimeout(() => simplemedia.classList.remove('card-noactive3'), 300);
  setTimeout(() => {
    document.querySelector('.media-hover').style.zIndex = '1';
    document.querySelector('.media-img2 img').style.marginLeft = '150%';
    document.querySelector('.media-cub1').style.marginLeft = '150%';
    document.querySelector('.media-cub2').style.right = '150%';
  }, 400);
  setTimeout(() => {
    document.querySelector('.media-img1 img').style.left = '150%';
    document.querySelector('.media-img3 img').style.left = '-150%';
    document.querySelector('.media-text1').style.marginLeft = '0';
    document.querySelector('.media-text2').style.marginLeft = '0';
  }, 600);
  setTimeout(() => document.querySelector('.media-text3').style.opacity = '1', 2000);
}

simplemedia.onmouseleave = function () {
  simplemedia.classList.add('card-noactive3');
  document.querySelector('#media-card-text').style.opacity = '1';
  document.querySelector('.media-hover').style.zIndex = '-1';
  document.querySelector('.media-img1 img').style.left = '50%';
  document.querySelector('.media-img2 img').style.marginLeft = '0';
  document.querySelector('.media-img3 img').style.left = '0';
  document.querySelector('.media-cub1').style.marginLeft = '0';
  document.querySelector('.media-cub2').style.right = '0';
  document.querySelector('.media-text1').style.marginLeft = '-200%';
  document.querySelector('.media-text2').style.marginLeft = '200%';
  document.querySelector('.media-text3').style.opacity = '0';
  document.querySelector('.media-text1').style.opacity = '0';
  document.querySelector('.media-text2').style.opacity = '0';
}