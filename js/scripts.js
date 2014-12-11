var change_nav_top = -8;
var change_nav_height = 8;
var original_nav_top = 19;

$(document).ready(function(){

  $(window).resize(function(){
    $('img#lucky').click(function(){
      $('div#slideshow').fadeIn().show();
      $('div#slideshow').css({
        position:'fixed',
        left: ($(window).width() - $('.div#slideshow').outerWidth())/25,
        top: ($(window).height() - $('.div#slideshow').outerHeight())/25,
      });
    });
  });

  $(window).resize();

  $('#exit-btn').click(function(){
    $('div#slideshow').hide();
  });

});