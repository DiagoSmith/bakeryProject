$(document).ready(function() {


	$(".amsterdam").hide();
	$(".apeldoorn").hide();
	$(".goes").hide();
	$(".utrecht").hide();

	$(".hideshowams").hover(function() {
		$(".amsterdam").toggle();
	});
	$(".hideshowape").hover(function() {
		$(".apeldoorn").toggle();
	});
	$(".hideshowgoe").hover(function() {
		$(".goes").toggle();
	});
	$(".hideshowutr").hover(function() {
		$(".utrecht").toggle();
	});
});