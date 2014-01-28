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


// scroll back up

// $("a[href='#top']").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });

// $(window).scroll(function() {
//     if ($(this).scrollTop()) {
//         $('#go_back_up_button').stop(true, true).fadeIn();
//     } else {
//         $('#toTop').stop(true, true).fadeOut();
//     }
// });


$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});