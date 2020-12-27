let input = document.querySelectorAll('.input-test');
let op0 = '0';
let op1 = '1';
let z1 = document.querySelector('.btn-next');
z1.style.setProperty('--sq-opacity', op0);
window.onload = function () {
  let inputArrText = [];
  for (let inp = 0; inp < input.length; inp++) {
    inputArrText[inp] = input[inp].value;
    input[inp].addEventListener('input', function () {
      inputArrText[inp] = input[inp].value;
      localStorage.setItem('inputArrText', JSON.stringify(inputArrText));
      if (window.innerWidth <= 1200) {
        if (inputArrText.length == 11 && inputArrText[0].length >= 2 && inputArrText[1].length > 2 && inputArrText[2].length > 2 && inputArrText[3].length > 2 && inputArrText[4].length > 2 && inputArrText[5].length > 2 && inputArrText[6].length > 2 && inputArrText[7].length > 2 && inputArrText[8].length > 2 && inputArrText[9].length > 2 && inputArrText[10].length > 2) {
          document.querySelector('.btn-next img').src = 'img/mb-next.png';
          document.querySelector('.btn-next').style.left = '0';
          document.querySelector('.btn-next').style.right = '0';
          document.querySelector('.btn-next').style.margin = 'auto';
          document.querySelector('.btn-next').style.textAlign = 'center';
          setTimeout(() => z1.style.setProperty('--sq-opacity', op1), 3000);
        }
      }
      else {
        if (inputArrText.length == 11 && inputArrText[0].length >= 2 && inputArrText[1].length > 2 && inputArrText[2].length > 2 && inputArrText[3].length > 2 && inputArrText[4].length > 2 && inputArrText[5].length > 2 && inputArrText[6].length > 2 && inputArrText[7].length > 2 && inputArrText[8].length > 2 && inputArrText[9].length > 2 && inputArrText[10].length > 2) {
          document.querySelector('.btn-next').style.top = '-20vh';
          setTimeout(() => z1.style.setProperty('--sq-opacity', op1), 3000);
        }
        else {
          document.querySelector('.btn-next').style.top = '-150vh';
          z1.style.setProperty('--sq-opacity', op0);
        }
      }
    });
  }
}

try {
  let b1 = document.querySelector('.before-1');
  let b2 = document.querySelector('.before-2');
  let b3 = document.querySelector('.before-3');
  let b4 = document.querySelector('.before-4');
  let b5 = document.querySelector('.before-5');

  let top60 = '-60vh';
  let top80 = '-80vh';
  let top32 = '-32vh';
  let top30 = '-30vh';
  let top52 = '-52vh';
  let top40 = '-40vh';
  let topM2 = '-101px';
  let topM0 = '-250px';
  let topM3 = '-500px';
  let topM30 = '-700px';
  let topM5 = '-355px';
  let topM1 = '-110px';

  if (window.innerWidth > 1200) {
    b1.style.setProperty('--sq-top', top60);
    b2.style.setProperty('--sq-top', top80);
    b3.style.setProperty('--sq-top', top80);
    b4.style.setProperty('--sq-top', top80);
    b5.style.setProperty('--sq-top', top80);
  }
  else {
    b1.style.setProperty('--sq-top', topM0);
    b5.style.setProperty('--sq-top', topM3);
    b2.style.setProperty('--sq-top', topM0);
    b3.style.setProperty('--sq-top', topM30);
  }

  document.querySelector('#btn1').onclick = function () {
    if (window.innerWidth > 1200) {
      setTimeout(() => b1.style.setProperty('--sq-top', top32), 100);
      setTimeout(() => b2.style.marginLeft = '0.5vh', 800);
      setTimeout(() => b2.style.marginRight = '1.4vh', 800);
      setTimeout(() => b2.style.setProperty('--sq-top', top30), 300);
      setTimeout(() => b3.style.setProperty('--sq-top', top52), 600);
      setTimeout(() => b5.style.setProperty('--sq-top', top40), 1200);
    }
    else if (window.innerWidth <= 1200) {
      document.querySelector('.hero').style.display = 'none';
      document.querySelector('.questions').style.display = 'flex';
      setTimeout(() => b1.style.setProperty('--sq-top', topM1), 100);
      setTimeout(() => b2.style.setProperty('--sq-top', topM2), 300);
      setTimeout(() => b3.style.setProperty('--sq-top', topM3), 600);
      setTimeout(() => b5.style.setProperty('--sq-top', topM5), 1200);
    }
    setTimeout(() => b4.style.setProperty('--sq-top', top52), 900);

  }

}

catch { }

try {
  let animate = '5s linear infinite circle';
  let s1 = document.querySelector('.btn');
  let s2 = document.querySelector('.s2');
  let s3 = document.querySelector('.button');
  document.querySelector('.btn').onmouseover = function () {
    s1.style.setProperty('--sq-animate', animate);
    s2.style.setProperty('--sq-animate', animate);
    s3.style.setProperty('--sq-animate', animate);
  }
  document.querySelector('.btn').onmouseout = function () {
    s1.style = 'none';
    s2.style = 'none';
    s3.style = 'none';
  }
}
catch { }

try {
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.querySelector('.questions-top').style.paddingBottom = '40px';
  }
}
catch { }