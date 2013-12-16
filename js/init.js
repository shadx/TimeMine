$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    pager: false,
    captions: false
  });
  
  // $(".b-top_menu__top_items .b-top_menu__top_items__act").prevAll("LI").css("background","none");
  // $(".b-top_menu__top_items .b-top_menu__top_items__act").prev("LI").css("background","none");
  
  $(".b-top_menu__top_items .b-top_menu__top_item").hover(
    function () {
      $(this).prev("LI").css("background-image","none");
      
      $(".b-top_menu__top_items .b-top_menu__top_item").removeClass("b-top_menu__top_items__act");
      $(this).addClass("b-top_menu__top_items__act");
      $(this).css("background","url(images/bg_top_menu-act.png) repeat-x 0 0");
    },
    function () {
      $(this).removeClass("b-top_menu__top_items__act");
      $(this).css("background","url(images/bg_top_menu-sep.png) repeat-y 100% 0");
      $(this).prev("LI").css("background","url(images/bg_top_menu-sep.png) repeat-y 100% 0");
    }
  );
  
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 160000,
    values: [ 350, 160000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 0 ]);
      $( "#amount2" ).val(ui.values[ 1 ] );
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
  
});