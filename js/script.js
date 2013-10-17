$(document).ready(function(){

	
	// scroll spy
	$('body').scrollspy({ 
		target: '#navbar-main',
		offset : $('#navbar-main').height()
	})

	// smooth scroll
	$('#navbar-main a, #back-top a').smoothScroll({
		offset: -$('.navbar').height(),
		afterScroll : function(){
			$('[data-spy="scroll"]').each(function () {
				var $spy = $(this).scrollspy('refresh')
			})
		}
	});

	// close the collapse navbar
	$(window).click(function(event){
		if($('.navbar-collapse').hasClass('in'))
			$('.navbar-collapse').collapse('hide');
	});

});