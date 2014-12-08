var change_nav_top = -8;
var change_nav_height = 8;
var original_nav_top = 19;

$(document).ready(function(){

  $(".menu-item").click(function(){
    $(".main-nav").slideUp("slow", "swing", function(){
      $(".main-nav").css("margin-top", change_nav_top+"px");
      $(".main-nav").css("display", "block");
      $(".main-nav").css("max-height", change_nav_height+"px");
    });
  });

  $("#name").click(function() {
    location.reload();
  });
});