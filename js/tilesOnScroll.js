$(function () {
  var lastScroll;
  $(window).scroll(function () {
    lastScroll = window.scrollY;
    $('#actionbar,.menu').css({
      // 'transform' : 'translate3d(0,' + lastScroll/2 + 'px,0)',
      'opacity' : (100 - lastScroll/20)/100
    });
  });
});