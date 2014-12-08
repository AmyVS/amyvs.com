var main_nav_top = -8;
var main_nav_height = 8;

$(document).ready(function(){

  $(".menu-item").click(function(){
    $(".main-nav").slideUp("slow", "swing", function(){
      $(".main-nav").css("margin-top", main_nav_top+"px");
      $(".main-nav").css("display", "block");
      $(".main-nav").css("max-height", main_nav_height+"px");
    });
  });

});