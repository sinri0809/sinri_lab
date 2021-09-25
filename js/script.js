'use strict';

window.onload = function () {
  $('.gnb__left-button').click(function () {
    $('.gnb').toggleClass('gnb-active');
  });
  let menu = $('.gnb__depth1').find('>li>a');
  $.each(menu, function (index) {
    $(this).click(function(){
      $('.gnb__depth2').eq(index).slideToggle();
    });
  });
}