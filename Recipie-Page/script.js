$(document).ready(function(){

  console.log("Script included!");



	$('#ingredients ul li').click(function()
	{
		console.log("Clicked")
		$(this).toggleClass("checked")

	});

});