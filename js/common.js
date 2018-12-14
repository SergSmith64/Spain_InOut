$(document).ready(function() {


	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 2;
		$('body, html').animate({scrollTop: bl_top}, 2500);
		return false;
	});
	
});


$(window).load(function() {

	$(".pic-move").animated("bounceInLeft");

// 	$(".top-logo img").animated("zoomInDown", "zoomInUp");
// 	$(".top-logo h3").animated("zoomInDown", "zoomInUp");
// 	$(".foto_univer h2").animated("bounceIn")
// 	$(".top-logo").animated("zoomInDown", "zoomInUp")

});