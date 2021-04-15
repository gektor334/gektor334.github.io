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
if (screen.width > 1200) {
  setTimeout(() => home.style.marginTop = '-135px', 1700);
  setTimeout(() => home.style.marginTop = '-290px', 2200);
}
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
if (screen.width <= 1200) {
  setTimeout(() => home.style.marginTop = '-100px', 1700);
  setTimeout(() => home.style.marginTop = '-200px', 2200);
}

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


if (screen.width > 1190) {
  let simplehome = document.querySelector('#simplehome');
  simplehome.onmouseenter = function () {
    document.querySelector('#home-card-text').style.opacity = '0';
    document.querySelector('.card-text__hover').style.visibility = 'visible';
    setTimeout(() => simplehome.classList.remove('card-noactive1'), 300);
    setTimeout(() => {
      document.querySelector('.hover-home').style.zIndex = '1';
      document.querySelector('.card-text__hover').style.position = 'relative';
    }, 200);
    setTimeout(() => {
      document.querySelector('.card-text__hover').style.zIndex = '1';
      document.querySelector('.home-cub1').style.left = '150%';
      document.querySelector('.hover-home img').style.left = '-150%';
      document.querySelector('.home-cub2').style.opacity = '0';
    }, 400);
  }


  simplehome.onmouseleave = function () {
    document.querySelector('.card-text__hover').style.position = 'absolute';
    document.querySelector('.card-text__hover').style.zIndex = '-1';
    document.querySelector('.card-text__hover').style.visibility = 'hidden';
    simplehome.classList.add('card-noactive1');
    document.querySelector('#home-card-text').style.opacity = '1';
    document.querySelector('.hover-home').style.zIndex = '-1';
    setTimeout(() => simplehome.classList.add('card-noactive1'), 300);
    setTimeout(() => {
      document.querySelector('.hover-home').style.zIndex = '-1';
    }, 200);
    setTimeout(() => {
      document.querySelector('.home-cub1').style.left = '0';
      document.querySelector('.hover-home img').style.left = '0';
      document.querySelector('.home-cub2').style.opacity = '1';
      document.querySelector('.hover-home').style.zIndex = '-1';
    }, 400);
  }


  let simpleoffice = document.querySelector('#simpleoffice');
  simpleoffice.onmouseenter = function () {
    document.querySelector('#office-card-text').style.opacity = '0';
    setTimeout(() => simpleoffice.classList.remove('card-noactive2'), 300);
    setTimeout(() => {
      document.querySelector('.pho1').style.top = '-150%';
      document.querySelector('.pho2').style.bottom = '-150%';
      document.querySelector('.office-hover').style.zIndex = '1';
      document.querySelector('.office-text__hover').style.position = 'relative';
    }, 300);
    setTimeout(() => {
      document.querySelector('.bg-office').style.opacity = '1';
      document.querySelector('.bg-office').style.transform = 'scale(3.6)';
      document.querySelector('.bg-office').style.top = '-300%';
    }, 900);
    setTimeout(() => {
      document.querySelector('.office-text__hover').style.opacity = '1';
      document.querySelector('.office-text__hover').style.zIndex = '1';
      document.querySelector('.office-img1').style.bottom = '80px';
      document.querySelector('.office-img1').style.right = '30px';
      document.querySelector('.office-img2').style.left = '150%';
      document.querySelector('.office-img3').style.right = '100px';
      document.querySelector('.office-img3').style.bottom = '20px';
      document.querySelector('.office-img4').style.left = '150%';
      document.querySelector('.office-img5').style.left = '150%';
      document.querySelector('.office-img6').style.left = '150%';
      document.querySelector('.office-img7').style.bottom = '109px';
      document.querySelector('.office-img8').style.left = '-393px';
      document.querySelector('.office-img8').style.bottom = '213px';
      document.querySelector('.office-img9').style.left = '-560px';
      document.querySelector('.office-img9').style.bottom = '122px';
      document.querySelector('.office-img10').style.bottom = '70px';
      document.querySelector('.office-img11').style.left = '150%';
      document.querySelector('.office-img12').style.bottom = '90px';
    }, 1100);
    setTimeout(() => {
      document.querySelector('.office-img1').style.bottom = '-180px';
      document.querySelector('.office-img1').style.right = '70px';
      document.querySelector('.office-img3').style.right = '130px';
      document.querySelector('.office-img3').style.bottom = '-160px';
      document.querySelector('.office-img7').style.bottom = '-149px';
      document.querySelector('.office-img12').style.bottom = '-34px';
      document.querySelector('.office-img10').style.left = '-150%';
    }, 2400);
  }

  simpleoffice.onmouseleave = function () {
    document.querySelector('.office-text__hover').style.opacity = '0';
    document.querySelector('.office-text__hover').style.position = 'absolute';
    document.querySelector('.office-text__hover').style.zIndex = '-1';
    document.querySelector('#office-card-text').style.opacity = '1';
    simpleoffice.classList.add('card-noactive2');
    document.querySelector('.office-hover').style.zIndex = '-1';
    document.querySelector('.office-img1').style.bottom = '-180px';
    document.querySelector('.office-img1').style.right = '-40px';
    document.querySelector('.office-img2').style.left = '-60px';
    document.querySelector('.office-img3').style.right = '-130px';
    document.querySelector('.office-img3').style.bottom = '-160px';
    document.querySelector('.office-img4').style.left = '-210px';
    document.querySelector('.office-img5').style.left = '-160px';
    document.querySelector('.office-img6').style.left = '-240px';
    document.querySelector('.office-img7').style.bottom = '-149px';
    document.querySelector('.office-img8').style.left = '540px';
    document.querySelector('.office-img8').style.bottom = '-213px';
    document.querySelector('.office-img9').style.left = '383px';
    document.querySelector('.office-img9').style.bottom = '-122px';
    document.querySelector('.office-img10').style.bottom = '-39px';
    document.querySelector('.office-img10').style.left = '70px';
    document.querySelector('.office-img11').style.left = '-540px';
    document.querySelector('.office-img12').style.bottom = '-34px';
    document.querySelector('.pho1').style.top = '-5.5vw';
    document.querySelector('.pho2').style.bottom = '-5.5vw';
    document.querySelector('.bg-office').style.opacity = '0';
    document.querySelector('.bg-office').style.transform = 'scale(1.6)';
    document.querySelector('.bg-office').style.top = '0';

  }


  let simplemedia = document.querySelector('#simplemedia');
  simplemedia.onmouseenter = function () {
    document.querySelector('.media-text1').style.opacity = '1';
    document.querySelector('.media-text2').style.opacity = '1';
    document.querySelector('#media-card-text').style.opacity = '0';
    setTimeout(() => simplemedia.classList.remove('card-noactive3'), 300);
    setTimeout(() => {
      document.querySelector('.media-text__hover').style.position = 'relative';
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
    setTimeout(() => document.querySelector('.media-text4').style.opacity = '1', 2000);
  }

  function simplemediaLeave() {
    simplemedia.classList.add('card-noactive3');
    document.querySelector('.media-text__hover').style.position = 'absolute';
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
    document.querySelector('.media-text4').style.opacity = '0';
    document.querySelector('.media-text1').style.opacity = '0';
    document.querySelector('.media-text2').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.media-img1 img').style.left = '50%';
      document.querySelector('.media-img3 img').style.left = '0';
      document.querySelector('.media-text1').style.marginLeft = '-200%';
      document.querySelector('.media-text2').style.marginLeft = '-200%';
    }, 600);
    setTimeout(() => document.querySelector('.media-text3').style.opacity = '0', 1000);
    setTimeout(() => document.querySelector('.media-text3').style.opacity = '0', 1500);
    setTimeout(() => document.querySelector('.media-text3').style.opacity = '0', 2000);
    setTimeout(() => document.querySelector('.media-text4').style.opacity = '0', 1000);
    setTimeout(() => document.querySelector('.media-text4').style.opacity = '0', 1500);
    setTimeout(() => document.querySelector('.media-text4').style.opacity = '0', 2000);
  }


  simplemedia.onmouseleave = simplemediaLeave;

  //header
  let scrollY = 0;
  window.onscroll = function () {
    let pos = window.pageYOffset;
    if (window.pageYOffset >= screen.height) {
      if ((scrollY - pos) >= 0) {
        document.querySelector('.header').style.marginTop = '0';
      }
      else {
        document.querySelector('.header').style.marginTop = '-90px';
      }
    }
    else {
      document.querySelector('.header').style.marginTop = '-90px';
    }
    scrollY = pos;
    console.log(scrollY);
  }

}