'use strict';
window.onload = function () {
  const gnb_trigger = $('.gnb__left-trigger');

  gnb_trigger.mouseenter(function(){
    $('.gnb').addClass('gnb-active');
  });
  $('.gnb').mouseleave(function(){
    $('.gnb').removeClass('gnb-active');
  });

  let menu = $('.gnb__depth1').find('>li>a');
  $.each(menu, function (index) {
    $(this).click(function(){
      $('.gnb__depth2').eq(index).slideToggle();
    });
  });
}