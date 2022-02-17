
jQuery(function($) {
  $(".menu_dropdown").hide(300);
  $("#genres").mouseover(function () {
    $(".menu_dropdown").show(300);
  });
  $("#genres").mouseleave(function () {
    $(".menu_dropdown").hide(300);

  });
  $('.wrapper_items').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
});

