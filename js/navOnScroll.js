$(window).scroll(function(){
  if ($("body").scrollTop() > 150) {
    $(".menu").addClass("shrink-fade");
  } else {
    $(".menu").removeClass("shrink-fade");
  }
});