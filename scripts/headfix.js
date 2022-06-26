$(function() {
    let header = $('header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header__fixed');
      } else {
       header.removeClass('header__fixed');
      }
    });
   });