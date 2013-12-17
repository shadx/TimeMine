$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    pager: false,
    captions: false
  });
  
  $('.b-modal__fastview .b-goods_list').bxSlider({
    pager: false,
    captions: false,
    minSlides: 3,
		maxSlides: 3,
		moveSlides: 2,
		slideWidth: 230,
    nextSelector: '#fastview_slider_next',
    prevSelector: '#fastview_slider_prev',
    nextText: '',
    prevText: ''
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
  
  $('.modal_close').click (function(){
    $('.b-modal_wp').hide();
    $('.b-modal').hide();
    $('BODY, HTML').css('overflow','auto');
  });
  
  $(function () {
    var $modal = $('.b-modal');
    $('.b-modal__selbrand-link, .b-modal__fastview-link').click(function(e) {
      var yourClick = true;
      $(document).bind('click.myEvent', function (e) {
        if (!yourClick && $(e.target).closest('.b-modal').length == 0) {
          $('.b-modal_wp').hide();
          $('.b-modal').hide();
          $(document).unbind('click.myEvent');
        }
        yourClick = false;
      });
      e.preventDefault();
    });
  });
  
  $('.b-modal__selbrand-link').click (function(){
    $('BODY, HTML').css('overflow','hidden');
    $('.b-modal_wp').show();
    $('.b-modal__selbrand').show();
  });
  $('.b-modal__fastview-link').click (function() {
    $('BODY, HTML').css('overflow','hidden');
    $('.b-modal_wp').show();
    $('.b-modal__fastview').show();
  });
});


function goods_view_foto($foto)
{
  $("#goods__big_foto").attr("src",$foto);
}