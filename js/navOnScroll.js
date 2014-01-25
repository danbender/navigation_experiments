$(window).scroll(function(){
  if ($("body").scrollTop() > 150) {
    $(".menu").addClass("shrinkNavBar");
  } else {
    $(".menu").removeClass("shrinkNavBar");
  }
});