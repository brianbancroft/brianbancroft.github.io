$(document).ready(function(){
	$('#imageShow').hide();
	$('#ingredients ul li').click(function()
	{
		$(this).toggleClass("checked")

	});
	$('img').click(function(){
	});
	$('#imageHide').click(function(){
		$('img').toggle();
		$('#imageHide').hide();
		$('#imageShow').show();
	});
	$('#imageShow').click(function(){
		$('img').toggle();
		$('#imageHide').show();
		$('#imageShow').hide();
	})
	$('ol li').click(function(){
		$('ol li').css('background-color',"#eee");
		$(this).css('background-color',"orange")

	})

});