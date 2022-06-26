
$(document).ready(function($) {
	$('.popup__open').click(function() {
		$('.popup__fade').fadeIn();
		return false;
	});	
	
	$('.popup__close').click(function() {
		$(this).parents('.popup__fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup__fade').fadeOut();
		}
	});
	
	$('.popup__fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
