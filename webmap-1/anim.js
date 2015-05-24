// JavaScript Document
$(document).ready(function () {
    $('#title').click(function () {
        $(this).css('background-color', 'green');
    });

    $('li#instr').click(function () {
        $(this).css('visibility','hidden');
		$('li#info').css('visibility','hidden');
		$('#instrPanel').css('visibility','visible');
    });
    $('li#info').click(function () {
        $(this).css('visibility','hidden');
		$('li#instr').css('visibility','hidden');
		$('#infoPanel').css('visibility','visible');
    });
	
	$('#instrPanel .close').click(function(){
		$('#instrPanel').css('visibility','hidden');
		$('li#info').css('visibility','visible');
		$('li#instr').css('visibility','visible');
	
	});
	$('#infoPanel .close').click(function(){
		$('#infoPanel').css('visibility','hidden');
		$('li#info').css('visibility','visible');
		$('li#instr').css('visibility','visible');
	
	});
	
	$('#legendPanel .close').click(function(){
		$('#legendPanel').css('visibility','hidden');
		$('#legendTab').css('visibility','visible');
	});

    $('#legendTab').click(function () {
        $(this).css('visibility', 'hidden');
		$('#legendPanel').css('visibility','visible');
    });

});