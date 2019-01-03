$(document).ready(function() {


	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 2;
		$('body, html').animate({scrollTop: bl_top}, 2500);
		return false;
	});

	$("#form_01").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_01.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thank you for contacting. In the near future, our managers will call you back.");
			setTimeout(function() {
				$("#form_01").trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});


// $(window).load(function() {

// });