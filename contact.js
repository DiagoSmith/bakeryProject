$(document).ready(function() {
	$(".amsterdam").hide();
	$(".apeldoorn").hide();
	$(".goes").hide();
	$(".utrecht").hide();
	$(".hideimg").hide();

	$(".hideshowams").hover(function() {
		$(".amsterdam").toggle();
		$('#Container').css("background", "url(locations-amsterdam.jpg)");
	});
	$(".hideshowape").hover(function() {
		$(".apeldoorn").toggle();
		$('#Container').css("background", "url(locations-apeldoorn.jpg)");
	});
	$(".hideshowgoe").hover(function() {
		$(".goes").toggle();
		$('#Container').css("background", "url(locations-goes.jpg)");
	});
	$(".hideshowutr").hover(function() {
		$(".utrecht").toggle();
		$('#Container').css("background", "url(locations-utrecht.jpg)");
	});
});	