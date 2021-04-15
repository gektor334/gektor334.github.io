let btn = document.querySelectorAll('.button');
let t = '';
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, -25);
    t = setTimeout('up()', 1);
  } else clearTimeout(t);
  return false;
}
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = up;
}

document.querySelector('.link-1').onclick = function () {
  document.querySelector('.popup-1').style.display = 'flex';
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.questions').style.display = 'none';
  document.querySelector('.content').style.display = 'none';
  document.querySelector('.receive').style.display = 'none';
  document.querySelector('.teacher').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
}

document.querySelector('.link-2').onclick = function () {
  document.querySelector('.popup-2').style.display = 'flex';
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.questions').style.display = 'none';
  document.querySelector('.content').style.display = 'none';
  document.querySelector('.receive').style.display = 'none';
  document.querySelector('.teacher').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
}
document.querySelector('.close').onclick = function () {
  document.querySelector('.popup-1').style.display = 'none';
  document.querySelector('.hero').style.display = 'flex';
  document.querySelector('.questions').style.display = 'flex';
  document.querySelector('.content').style.display = 'flex';
  document.querySelector('.receive').style.display = 'flex';
  document.querySelector('.teacher').style.display = 'flex';
  document.querySelector('.footer').style.display = 'flex';
}
document.querySelector('.close-2').onclick = function () {
  document.querySelector('.popup-2').style.display = 'none';
  document.querySelector('.hero').style.display = 'flex';
  document.querySelector('.questions').style.display = 'flex';
  document.querySelector('.content').style.display = 'flex';
  document.querySelector('.receive').style.display = 'flex';
  document.querySelector('.teacher').style.display = 'flex';
  document.querySelector('.footer').style.display = 'flex';
}
document.querySelector('.blackout-link').onclick = function () {
  document.querySelector('.popup-1').style.display = 'flex';
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.questions').style.display = 'none';
  document.querySelector('.content').style.display = 'none';
  document.querySelector('.receive').style.display = 'none';
  document.querySelector('.teacher').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  let timeStart = document.querySelector('.time-start');
  let newTime = new Date();
  if ((newTime.getUTCHours() + 3) >= 19) {
    timeStart.innerHTML = 'Начало вебинара ' + (newTime.getDate() + 1) + '.' + (newTime.getMonth() + 1) + '.' + newTime.getFullYear() + ' в&nbsp;19:00 МСК';
    if ((newTime.getMonth() + 1) < 10) {
      timeStart.innerHTML = 'Начало вебинара ' + (newTime.getDate() + 1) + '.' + '0' + (newTime.getMonth() + 1) + '.' + newTime.getFullYear() + ' в&nbsp;19:00 МСК';
    }
  } else {
    timeStart.innerHTML = 'Начало вебинара ' + newTime.getDate() + '.' + (newTime.getMonth() + 1) + '.' + newTime.getFullYear() + ' в&nbsp;19:00 МСК';
    if ((newTime.getMonth() + 1) < 10) {
      timeStart.innerHTML = newTime.getDate() + '.' + '0' + (newTime.getMonth() + 1) + '.' + newTime.getFullYear() + ' в&nbsp;19:00 МСК';
    }
  }
});
