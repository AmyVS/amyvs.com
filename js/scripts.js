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

  // To initially run the function:
  $(window).resize();

  $('#exit-btn').click(function(){
    $('div#slideshow').hide();
  });
  // $(".content").hide();

  // $(window).on('scroll', function() {
  //     // var y_scroll_pos = window.pageYOffset;
  //     // var scroll_pos_test = 150;           // set to whatever you want it to be
  //     var scrolling_val = $(document).scrollTop().valueOf();
  //     // alert(scrolled_val);
  //     if (scrolling_val === 0) {
  //       $("ul.ul-top").css("visibility", "hidden");
  //       $(".main-nav").show();
  //     } else if(scrolling_val < 100) {
  //         //do stuff
  //       $("ul.ul-top").css("visibility", "visible");
  //       $(".main-nav").hide();
  //     }
  // });

  // $(".menu-item").click(function(){
  //   $(".main-nav").slideUp("slow", "swing", function(){
  //     $(".main-nav").css("margin-top", change_nav_top+"px");
  //     $(".main-nav").css("display", "block");
  //     $(".main-nav").css("max-height", change_nav_height+"px");
  //   });
  //   $(".content:hidden:first").fadeIn("slow");
  // });

  // $("#name").click(function() {
  //   location.reload();
  // });
});