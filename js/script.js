jQuery(function ($) {
  $(".menu_dropdown").hide(300);
  $("#genres").mouseover(function () {
    $(".menu_dropdown").show(300);
  });
  $("#genres").mouseleave(function () {
    $(".menu_dropdown").hide(300);
  });
  $(".animation").hide();

  let waiting_time_one;
  let waiting_time_two;
  function show(id) {
    $(id).show();
    console.log("show")
  };

  $("#movie_one").mouseover(function () {

    clearTimeout(waiting_time_one);
    waiting_time_one = setTimeout(()=> show("#animation_one"), 800);
    console.log("test")
    
  });
  $("#movie_one").mouseleave(function () {
    clearTimeout(waiting_time_one);
    $("#animation_one").hide();

    console.log("testout");
  });
  $("#movie_two").mouseover(function () {
    clearTimeout(waiting_time_two);
    waiting_time_two = setTimeout(()=> show("#animation_two"), 800);
  });
  $("#movie_two").mouseleave(function(){
    clearTimeout(waiting_time_two);
    $("#animation_two").hide();
  });



  $(".wrapper_items").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
});
