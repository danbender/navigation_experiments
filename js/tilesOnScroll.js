// Fade out nav and action bar on scroll

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

// On scroll show back to top button

$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('#toTop').fadeIn("slow", function() {
        });
    } else {
        $('#toTop').fadeOut();
    }
});

// Listen for click, scroll up slowly

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});