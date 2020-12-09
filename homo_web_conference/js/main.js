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

