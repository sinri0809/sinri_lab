'use strict';

window.onload = function () {
  let bg_svg = document.querySelector('#bg');
  window.addEventListener('scroll', function () {
    let value = window.scrollY;
    bg_svg.style.backgroundSize = `${100+value}px`;
  })
}
