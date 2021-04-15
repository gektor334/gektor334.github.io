window.onload = function () {
  let heroIMG = document.querySelector('.hero__img');
  let screenWidth = window.screen.width;
  let mlIMG = (screenWidth - 1200) / 2;
  let wIMG = screenWidth - mlIMG;
  if (screenWidth <= 1440) {
    heroIMG.style.width = wIMG + 5 + 'px';
    heroIMG.style.marginLeft = mlIMG - 5 + 'px';
  }

  if (screenWidth <= 1200) {
    mlIMG = (screenWidth - 700) / 2;
    wIMG = screenWidth - mlIMG;
    heroIMG.style.width = wIMG + 'px';
    heroIMG.style.marginLeft = mlIMG + 'px';
  }


  let mr1 = document.querySelector('.mobile-row1');
  let mr2 = document.querySelector('.mobile-row2');
  let mr3 = document.querySelector('.mobile-row3');
  let mr4 = document.querySelector('.mobile-row4');
  let activeRow1 = document.querySelector('.mobile-row1 .table-col-1');
  let activeRow2 = document.querySelector('.mobile-row2 .table-col-1');
  let activeRow3 = document.querySelector('.mobile-row3 .table-col-1');


  if (screenWidth <= 767) {
    mlIMG = 0;
    wIMG = screenWidth;
    heroIMG.style.width = wIMG + 'px';
    heroIMG.style.marginLeft = mlIMG + 'px';

    mr4.style.display = 'none';

    let mr11 = document.querySelectorAll('.mobile-row1-1');
    for (let i = 0; i < mr11.length; i++) {
      mr11[i].style.display = 'none';
    }

    mr1.onclick = function () {
      for (let i = 0; i < mr11.length; i++) {
        if (mr11[i].style.display == 'flex') {
          mr11[i].style.display = 'none';
          mr4.style.display = 'none';
          activeRow1.classList.remove('active-row');
        }
        else {
          mr11[i].style.display = 'flex';
          mr4.style.display = 'flex';
          activeRow1.classList.add('active-row');
        }
      }
    }

    let mr12 = document.querySelectorAll('.mobile-row1-2');
    for (let i = 0; i < mr12.length; i++) {
      mr12[i].style.display = 'none';
    }

    mr2.onclick = function () {
      for (let i = 0; i < mr12.length; i++) {
        if (mr12[i].style.display == 'flex') {
          mr12[i].style.display = 'none';
          mr4.style.display = 'none';
          activeRow2.classList.remove('active-row');
        }
        else {
          mr12[i].style.display = 'flex';
          mr4.style.display = 'flex';
          activeRow2.classList.add('active-row');
        }
      }
    }

    let mr13 = document.querySelectorAll('.mobile-row1-3');
    for (let i = 0; i < mr13.length; i++) {
      mr13[i].style.display = 'none';
    }

    mr3.onclick = function () {
      for (let i = 0; i < mr13.length; i++) {
        if (mr13[i].style.display == 'flex') {
          mr13[i].style.display = 'none';
          mr3.style.borderBottom = '1px solid #C4C4C4';
          mr4.style.display = 'none';
          activeRow3.classList.remove('active-row');
        }
        else {
          mr13[i].style.display = 'flex';
          mr3.style.borderBottom = 'none';
          mr4.style.display = 'flex';
          activeRow3.classList.add('active-row');
        }
      }
    }
  }
}

function maskPhone(selector, masked = '+7 (___) ___-__-__') {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
      function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }

  }

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

}
