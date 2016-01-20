$(document).ready(function() {


	//If you click on one of the product-type-buttons, the previous box disappears
	$(".button").on("click", function() {

		$(".productBox").hide();


	})

	//Als je op een product- button van Brood klikt, dan verdwijnt de productfoto van de vorige klik

	$(".buttonProductBrood").on("mouseleave", function() {

		$(".broodImg").hide();
		$(".buttonProductBrood").css("background-color", "white");


	})


	//Als je op een product- button van Pastry klikt, dan verdwijnt de productfoto van de vorige klik

	$(".buttonProductPastry").on("mouseleave", function() {

		$(".pastryImg").hide();
		$(".buttonProductPastry").css("background-color", "white");



	})

//Als je op een product- button van Croissants klikt, dan verdwijnt de productfoto van de vorige klik

	$(".buttonProductCroissants").on("mouseleave", function() {

		$(".croissantImg").hide();
		$(".buttonProductCroissants").css("background-color", "white");


	})

	//Als je op een product- button van Cake klikt, dan verdwijnt de productfoto van de vorige klik

	$(".buttonProductCake").on("mouseleave", function() {

		$(".cakeImg").hide();
		$(".buttonProductCake").css("background-color", "white");

	})





	/*These are the click functions for the different product-type-boxes that must appear if you click on the button
	for a product-type */


	$("#button1").click(function() {

		$("#broodBox").fadeIn("slow");


	});

	$("#button2").click(function() {

		$("#pastriesBox").fadeIn("slow");


	});

	$("#button3").click(function() {

		$("#croissantsBox").fadeIn("slow");


	});

	$("#button4").click(function() {

		$("#cakeBox").fadeIn("slow");


	});

	//These are the click functions for all the BREAD products.


	$("#buttonWit").mouseenter(function() {

		$("#baguette").fadeIn("slow");
		$("#buttonWit").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonVolk").mouseenter(function() {

		$("#volkoren").fadeIn("slow");
		$("#buttonVolk").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonSpelt").mouseenter(function() {

		$("#spelt").fadeIn("slow");
		$("#buttonSpelt").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonRogge").mouseenter(function() {

		$("#rogge").fadeIn("slow");
		$("#buttonRogge").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonItal").mouseenter(function() {

		$("#italiaans").fadeIn("slow");
		$("#buttonItal").css("background-color", "rgb(39,172,159)");


	});

//These are the click functions for all the PASTRY products.

$("#buttonBos").mouseenter(function() {

		$("#bossche").fadeIn("slow");
		$("#buttonBos").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonMaca").mouseenter(function() {

		$("#macaron").fadeIn("slow");
		$("#buttonMaca").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonMoon").mouseenter(function() {

		$("#mooncake").fadeIn("slow");
		$("#buttonMoon").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonTomp").mouseenter(function() {

		$("#tompouce").fadeIn("slow");
		$("#buttonTomp").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonStrudel").mouseenter(function() {

		$("#strudel").fadeIn("slow");
		$("#buttonStrudel").css("background-color", "rgb(39,172,159)");


	});

	//These are the click functions for all the CROISSANT products.

$("#buttonPlain").mouseenter(function() {

		$("#plain").fadeIn("slow");
		$("#buttonPlain").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonChocolate").mouseenter(function() {

		$("#chocolate").fadeIn("slow");
		$("#buttonChocolate").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonStrawberry").mouseenter(function() {

		$("#strawberry").fadeIn("slow");
		$("#buttonStrawberry").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonJam").mouseenter(function() {

		$("#jam").fadeIn("slow");
		$("#buttonJam").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonBacon").mouseenter(function() {

		$("#bacon").fadeIn("slow");
		$("#buttonBacon").css("background-color", "rgb(39,172,159)");


	});

//These are the click functions for all the CAKE products.

$("#buttonApple").mouseenter(function() {

		$("#apple").fadeIn("slow");
		$("#buttonApple").css("background-color", "rgb(39,172,159)");


	});

	$("#buttonBatt").mouseenter(function() {

		$("#battenberg").fadeIn("slow");
		$("#buttonBatt").css("background-color", "rgb(39,172,159)");

	});

	$("#buttonRed").mouseenter(function() {

		$("#redvelvet").fadeIn("slow");
		$("#buttonRed").css("background-color", "rgb(39,172,159)");

	});

	$("#buttonChoc").mouseenter(function() {

		$("#chocolatecake").fadeIn("slow");
		$("#buttonChoc").css("background-color", "rgb(39,172,159)");

	});

	$("#buttonOrange").mouseenter(function() {

		$("#orange").fadeIn("slow");
		$("#buttonOrange").css("background-color", "rgb(39,172,159)");



	});






});