$(document).ready(function(){
    $(".button").click(function(){
      var value = $(this).attr("data-filter");
      var elem = $(".pizza-menu__item");
      if(value == "all"){
        $(elem).show("500");
      }
      else{
        $(elem).not("."+value).hide("500");
        $(elem).filter("."+value).show("500");
      }
    });
  })