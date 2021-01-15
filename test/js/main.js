let tel = document.querySelector('.cost .flag-tel');
let telM = document.querySelector('.modal .flag-tel');
let ul = document.querySelector('.cost .ul');
let ulM = document.querySelector('.modal .ul');
let li = document.querySelectorAll('.list');
let iTel = document.querySelector('.cost .number-tel');
let iTelM = document.querySelector('.modal .number-tel');

iTel.value = '+7';
tel.onclick = function () {
  if (ul.style.display == 'block') {
    ul.style.display = 'none';
  }
  else {
    ul.style.display = 'block';
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = function (e) {
        tel.firstElementChild.src = e.target.src;
        iTel.value = e.target.dataset.num;
        ul.style.display = 'none';
      }
    }
  }
}

iTelM.value = '+7';
telM.onclick = function () {
  if (ulM.style.display == 'block') {
    ulM.style.display = 'none';
  }
  else {
    ulM.style.display = 'block';
    for (let i = 0; i < li.length; i++) {
      li[i].onclick = function (e) {
        telM.firstElementChild.src = e.target.src;
        iTelM.value = e.target.dataset.num;
        ulM.style.display = 'none';
      }
    }
  }
}

document.querySelector('.btn').onclick = function () {
  document.querySelector('.modal').style.display = 'flex';
}
document.querySelector('.close').onclick = function () {
  document.querySelector('.modal').style.display = 'none';
}

document.querySelector('.modal .number-tel').onkeypress = function (e) {
  let out = '';
  if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 43) {
    out = e.key;
  }
  else {
    return false;
  }
  document.querySelector('.modal .number-tel').innerHTML += out;
}

document.querySelector('.modal .form-btn').onclick = function () {
  let policy = document.querySelector('.modal #policy');
  let err = document.querySelector('.modal .err')
  let errTel = document.querySelector('.modal .err-tel');
  if (policy.checked) {
    err.style.display = 'none';
    if (iTelM.value.length > 10) {
      errTel.style.display = 'none';
      document.querySelector('.modal .right-card').style.display = 'none';
      document.querySelector('.modal .shipped').style.display = 'flex';
    }
    else {
      errTel.style.display = 'block';
    }
  }
  else {
    err.style.display = 'block';
    if (iTelM.value.length > 10) {
      errTel.style.display = 'none';
    }
    else {
      errTel.style.display = 'block';
    }
  }
}

document.querySelector('.cost .number-tel').onkeypress = function (e) {
  let out = '';
  if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 43) {
    out = e.key;
  }
  else {
    return false;
  }
  document.querySelector('.cost .number-tel').innerHTML += out;
}

document.querySelector('.cost .form-btn').onclick = function () {
  let policy = document.querySelector('.cost #policy');
  let err = document.querySelector('.cost .err')
  let errTel = document.querySelector('.cost .err-tel');
  if (policy.checked) {
    err.style.display = 'none';
    if (iTel.value.length > 10) {
      errTel.style.display = 'none';
      alert('отправлено');
    }
    else {
      errTel.style.display = 'block';
    }
  }
  else {
    err.style.display = 'block';
    if (iTel.value.length > 10) {
      errTel.style.display = 'none';
    }
    else {
      errTel.style.display = 'block';
    }
  }
}

let screenWidth = window.screen.width
if (screenWidth <= 850) {
  let nav = document.querySelector('nav');
  nav.onclick = function () {
    nav.classList.add('mobile');
    nav.classList.remove('nav');
    navClose.style.display = 'block';
    return false;
  }
  let navClose = document.querySelector('.nav-close');
  navClose.onclick = function () {
    nav.classList.remove('mobile');
    nav.classList.add('nav');
    this.style.display = 'none';
    return false;
  }
}