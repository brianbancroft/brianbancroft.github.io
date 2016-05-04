// MAP INITIALIZATION

function displayResult(){
	var $dataFields = $('.textpopulate');
	$dataFields.fadeOut('slow');
	$dataFields.html('');

	data.forEach(function(crime) {
	var template = Handlebars.compile(resultTemplate);
	var html = template(crime);
	$dataFields.append(html);
});
}


$(document).ready(function(){

		var mymap = L.map('mapid').setView([52.629729, -1.131592], 15);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);



/*
		L.marker([51.5, -0.09]).addTo(mymap)
			.bindPopup("<b>Hello world!</b><br />I am a popup.");

		L.circle([51.508, -0.11], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("I am a circle.");

		L.polygon([
			[51.509, -0.08],
			[51.503, -0.06],
			[51.51, -0.047]
		]).addTo(mymap).bindPopup("I am a polygon.");
*/

		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(mymap);
		}

		mymap.on('click', onMapClick);

// AJAX GET REQUREST

//SAMPLE REQUEST - https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2014-01

	$('#button-execute').click(function(e){

		var $el = $(e.target);
		console.log('button is pressed');
		$.ajax({
			url: 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2014-01',
			method: 'get',
			headers: { accept: 'application/json' }
		}).done(function(res) {
			res.forEach(function(crime){
				L.marker([crime.location.latitude, crime.location.longitude]).addTo(mymap)
					.bindPopup("<b>Hello world!</b><br />I am a crime!");
				// var html = Handlebars.compile($(resultTemplate).html())(crime);
				// $('.textpopulate').append(html);
			});
		});

	});


});
