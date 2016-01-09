$(function() {
	var dropdown1 = $(".menu_dropdown").eq(0).children('button');
	var dropdown2 = $(".menu_dropdown").eq(1).children('button');

	dropdown1.click(function(event) {
		var boton = $(this);
		dropdown2.next('ul').hide(100);
		boton.next('ul').toggle(300,function(){
			$(this).children('li').children('input').focus();
		});
	});	

	dropdown2.click(function(event) {
		var boton = $(this);
		dropdown1.next('ul').hide(100);
		boton.next('ul').toggle(300);
	});


	// dropdown.click(function(event) {
	// 	var boton = $(this);
	// 	boton.children('ul').toggle('400', function() {
	// 		console.log($(this));
	// 		$(this).focusout(function(event) {
	// 			$(this).hide('200');
	// 		});
	// 	});
	// });
	// dropdown.click(function(event) {
	// 	var boton = $(this);
	// 	boton.children('ul').show('400', function() {
	// 		boton.after('<div class="hide_content"></div>');
	// 		$('div.hide_content').click(function(event) {
	// 			console.log('wi');
	// 			dropdown.children('ul').hide('100');
	// 			$(this).remove();
	// 		});
	// 	});
	// });
	
	
});