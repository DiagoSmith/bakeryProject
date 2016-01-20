$(document).ready(function(){
    $("#thenTitle").click(function(){
        $("#thenAbout").show(1500);
        $("#nowAbout").hide(1500);
        $(this).css('color', 'rgb(39,172,159)');
        $("#nowTitle").css('color', 'black');
       });




    $("#nowTitle").click(function(){
    	$("#thenAbout").hide(1500);
        $("#nowAbout").show(1500);
        $(this).css('color', 'rgb(39,172,159)');
        $("#thenTitle").css('color', 'black');

    });

});    


