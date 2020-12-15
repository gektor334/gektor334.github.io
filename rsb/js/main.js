let ul = document.querySelectorAll('.language');
let li = document.querySelectorAll('.language-li');

document.body.onclick = function (e) {
  for (let i = 0; i < ul.length; i++) {
    if (e.target.className == 'language-li') {
      if (ul[i].style.height == '34px') {
        ul[i].style.height = '15px';
      }
      else {
        ul[i].style.height = '34px';
      }
    }
    else {
      ul[i].style.height = '15px';
    }
  }
}


let btn = document.querySelectorAll('.hero-btn');

setTimeout(() => btn[0].style.display = 'block', 14000);
setTimeout(() => btn[1].style.display = 'block', 14000);


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

function startMobile(e) {
  let touches = e.changedTouches;
  console.log(touches[0].pageY);
}
document.querySelector('.mb').addEventListener("touchstart", startMobile);

function endMobile(e) {
  let touches = e.changedTouches;
  console.log(touches[0].pageY);
}
document.querySelector('.mb').addEventListener("touchend", endMobile);