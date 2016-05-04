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

		var crimeMarkers = L.layerGroup([]);
		var crimeCount = 0;
		crimeMarkers.addTo(mymap);






/*
		L.marker([51.5, -0.09]).addTo(mymap)
			.bindPopup("<b>Hello world!</b><br />I am a popup.");

		L.circle([e.latlng.lat, e.latlng.lng], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		});

		L.polygon([
			[51.509, -0.08],
			[51.503, -0.06],
			[51.51, -0.047]
		]).addTo(mymap).bindPopup("I am a polygon.");
*/

		var popup = L.popup();

		function onMapClick(e) {
			// debugger;
			mymap.removeLayer(crimeMarkers);
			crimeCount = 0;

			crimeMarkers = L.layerGroup([
				radiusCircle = L.circle([e.latlng.lat, e.latlng.lng], 1600, {
					color: 'red',
					fillColor: '#f03',
					fillOpacity: 0.2
				})
			]);
			var latitude = e.latlng.lat.toString();
			var longitude = e.latlng.lng.toString();
			console.log('latitude: '+ latitude + ', Longitude: ' + longitude);
			choosemonth = $('#choosemonth').val();
			chooseyear = $('#chooseyear').val();
			console.log(chooseyear + '-' + choosemonth);
			$.ajax({
				url: 'https://data.police.uk/api/crimes-street/all-crime?lat=' + latitude + '&lng='+ longitude + '&date=' + chooseyear + '-' + choosemonth,
				method: 'get',
				headers: { accept: 'application/json' }
			}).done(function(res) {
				res.forEach(function(crime){
					crimeCount += 1;
					crimeMarkers.addLayer(L.marker([crime.location.latitude, crime.location.longitude]));
					// var html = Handlebars.compile($(resultTemplate).html())(crime);
					// $('.textpopulate').append(html);
				});

				crimeMarkers.addTo(mymap);
				$('#crimestat').text("In the place you clicked, there were " + crimeCount + " crimes.");

			});
		}

		mymap.on('click', onMapClick);

});
