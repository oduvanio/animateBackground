function rotator(div) {
	div=$(div);
	div.find('.image').css({opacity: 0.0});
	div.css('backgroundImage', div.find('.image:first').next('.image').css('backgroundImage'));
	div.find('.image:first').css({opacity: 1.0}).addClass('show').addClass('scale');
	div.find('.image:first').addClass('scale');
	var images = div.find('.image');
	var i = 1;
	setInterval(function(){
		var current = (div.find('.image.show').length?  div.find('.image.show') : div.find('.image:first'));
		var next = ((current.next('.image').length) ? ((current.next('.image').hasClass('show')) ? div.find('.image:first') : current.next('.image')) : div.find('.image:first'));	
		if (i >= images.length) {
			i=0;
		}
		div.css('backgroundImage', next.css('backgroundImage'));
		next.css({opacity: 0.0}).addClass('show').toggleClass('scale').animate({opacity: 1.0}, 3000);
		current.animate({opacity: 0.0}, 1000).removeClass('show');
	}, 5000);
}