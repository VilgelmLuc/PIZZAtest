$('.pizza-size__item').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.tab[data-tab="'+ id +'"]');
   
   $('.pizza-size__item').removeClass('active');
   $(this).addClass('active');
   
   $('.tab.active').removeClass('active');
   content.addClass('active');
});