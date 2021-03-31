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
