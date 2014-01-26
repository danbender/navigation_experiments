$(window).scroll(function(){
  if ($("body").scrollTop() > 150) {
    $("#actionbar").addClass("shrinkActionBar");
    $(".menu").addClass("shrinkMenu");
  } else {
    $("#actionbar").removeClass("shrinkActionBar");
    $(".menu").removeClass("shrinkMenu");
  }
});