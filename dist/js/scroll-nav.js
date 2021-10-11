$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("#main-nav").addClass("scrolled");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#main-nav").removeClass("scrolled");
  }
});
