//  Nav effect on scroll

$(window).scroll(function(){
  if ($("body").scrollTop() > 150) {
    $("#actionbar").addClass("shrinkActionBar");
    $(".menu").addClass("shrinkMenu");
  } else {
    $("#actionbar").removeClass("shrinkActionBar");
    $(".menu").removeClass("shrinkMenu");
  }
});

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



// Tiles behavior

(function(){
    $('.tile').each(function(){
        var $this= $(this),
            page = $this.data('page-name'),
            bgcolor = $this.css('background-color'),
            textColor = $this.css('color');

            if($this.hasClass('rotate3d')) {
              frontface = $this.find('.front');
              bgcolor = frontface.css('#fff');
              textColor = frontface.css('color');
            }

            if($this.hasClass('fig-tile')) {
              caption = $this.find('figcaption');
              bgcolor = caption.css('background-color');
              textColor = caption.css('color');
            }

        $this.on('click',function(){
          $('.'+page).css({'background-color': bgcolor, 'color': textColor})
                     .find('.close-button').css({'background-color': 'textColor', 'color': bgcolor});
        });
    });

    function showDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.col'+i).each(function(){
            $(this).addClass('fadeInForward-'+i).removeClass('fadeOutback');
        });
      }
    }

    function fadeDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.col'+i).addClass('fadeOutback').removeClass('fadeInForward-'+i);
      }
    }

  $('.tile').each(function(){
    var $this= $(this),
        pageType = $this.data('page-type'),
        page = $this.data('page-name');

    $this.on('click',function(){
      if(pageType === "s-page"){
          fadeDashBoard();
          $('.'+page).addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }
        else{
          $('.'+page).addClass('openpage');
          fadeDashBoard();
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    });
  });

  $('.r-close-button').click(function(){
      $(this).parent().addClass('slidePageLeft')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                $(this).removeClass('slidePageLeft').removeClass('openpage');
              });
      showDashBoard();
  });
  $('.s-close-button').click(function(){
      $(this).parent().removeClass('slidePageInFromLeft').addClass('slidePageBackLeft');
      showDashBoard();
  });

})();