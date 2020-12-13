let ul = document.querySelector('.language');
let li = document.querySelectorAll('.language-li');

document.body.onclick = function (e) {
  if (e.target.className == 'language-li') {
    if (ul.style.height == '34px') {
      ul.style.height = '15px';
    }
    else {
      ul.style.height = '34px';
    }
  }
  else {
    ul.style.height = '15px';
  }
}


let btn = document.querySelector('.hero-btn');
setTimeout(() => btn.style.display = 'block', 13000);

let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutationRecord) {
    window.addEventListener('wheel', function (e) {
      if (e.deltaY >= 1) {
        window.location = '#subscription';
      }
    });
  });
});

let target = document.querySelector('.hero-btn');
observer.observe(target, { attributes: true, attributeFilter: ['style'] });

let bgRu = document.querySelector('.hero-ru');
window.onload = function () {
  bgRu.style.backgroundImage = "url(../img/RSB_START_GIF-RU.gif?" + new Date().getTime() + ")";
}
let bgEn = document.querySelector('.hero-en');
window.onload = function () {
  bgEN.style.backgroundImage = "url(../img/RSB_START_GIF-EN.gif?" + new Date().getTime() + ")";
}