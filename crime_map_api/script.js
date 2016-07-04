// MAP INITIALIZATION

$(document).ready(function() {

    $('#crime-stats-row').hide();
    var mymap = L.map('mapid').setView([52.629729, -1.131592], 9);



    L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'png'
    }).addTo(mymap);


    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    //  maxZoom: 18,
    //  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    //      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //  id: 'mapbox.streets'
    // }).addTo(mymap);

    var crimeMarkers = L.layerGroup([]);
    //counts for various crimes
    var crimeCount = 0;
    var chosenCrimeCount = 0;
    var asbCount = 0; //Antisocial Behaviour
    var burgCount = 0;
    var cdaCount = 0; //In future britian, it's a crime to be Canadian (criminal damage arson)
    var drugsCount = 0;
    var theftCount = 0;
    var pdwCount = 0; //Weapons charges
    var robCount = 0;
    var shopliftCount = 0;
    var vehCount = 0; // Vehicle Crimes
    var violentCount = 0;
    var otherCount = 0;
    crimeMarkers.addTo(mymap);


    function countCalc(crime) {
        crimeCount += 1;
        switch (crime.category) {
            case 'anti-social-behaviour':
                asbCount += 1;
                break;
            case 'burglary':
                burgCount += 1;
                break;
            case 'criminal-damage-arson':
                cdaCount += 1;
                break;
            case 'drugs':
                drugsCount += 1;
                break;
            case 'other-theft':
                theftCount += 1;
                break;
            case 'public-disorder-weapons':
                pdwCount += 1;
                break;
            case 'robbery':
                robCount += 1;
                break;
            case 'shoplifting':
                shopliftCount += 1;
                break;
            case 'vehicle-crime':
                vehCount += 1;
                break;
            case 'violent-crime':
                violentCount += 1;
                break;
            default:
                otherCount += 1;
                console.log("Other count has been incremented: " + otherCount);
        }
    }

    function countReset() {
        crimeCount = 0;
        asbCount = 0; //Antisocial Behaviour
        burgCount = 0;
        cdaCount = 0; //In future britian, it's a crime to be Canadian (criminal damage arson)
        drugsCount = 0;
        theftCount = 0;
        pdwCount = 0; //Weapons charges
        robCount = 0;
        shopliftCount = 0;
        vehCount = 0; // Vehicle Crimes
        violentCount = 0;
        otherCount = 0;
    }

    var popup = L.popup();

    function onMapClick(e) {
        // debugger;
        mymap.removeLayer(crimeMarkers);
        countReset();

        crimeMarkers = L.layerGroup([
            radiusCircle = L.circle([e.latlng.lat, e.latlng.lng], 1600, {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2
            })
        ]);
        var latitude = e.latlng.lat.toString();
        var longitude = e.latlng.lng.toString();
        console.log('latitude: ' + latitude + ', Longitude: ' + longitude);
        choosemonth = $('#choosemonth').val();
        chooseyear = $('#chooseyear').val();
        choosecrime = $('#choosecrime').val();
        console.log(chooseyear + '-' + choosemonth);
        $.ajax({
            url: 'https://data.police.uk/api/crimes-street/all-crime?lat=' + latitude + '&lng=' + longitude + '&date=' + chooseyear + '-' + choosemonth,
            method: 'get',
            headers: {
                accept: 'application/json'
            }
        }).done(function(res) {
            res.forEach(function(crime) {
                countCalc(crime);
                if (choosecrime === 'all' || choosecrime === crime.category) {
                    console.log("if criteria met");
                    crimeMarkers.addLayer(L.marker([crime.location.latitude, crime.location.longitude]).bindPopup('This is a crime!'));

                }
            });
            // console.log("Antisocial behaviour at " + asbCount);
            // console.log("burglary at " + burgCount);
            // console.log("arson at " + cdaCount);
            // console.log("drugs at " + drugsCount);
            // console.log("Theft at " + theftCount);
            // console.log("Weapons at " + pdwCount);
            // console.log("Robberies at " + robCount);
            // console.log("vehicle crime at "+ vehCount);
            // console.log("Violent Crimes at " + violentCount);
            switch (choosecrime) {
                case 'anti-social-behaviour':
                    chosenCrimeCount = asbCount;
                    break;
                case 'burglary':
                    chosenCrimeCount = burgCount;
                    break;
                case 'criminal-damage-arson':
                    chosenCrimeCount = cdaCount;
                    break;
                case 'drugs':
                    chosenCrimeCount = drugsCount;
                    break;
                case 'other-theft':
                    chosenCrimeCount = theftCount;
                    break;
                case 'public-disorder-weapons':
                    chosenCrimeCount = pdwCount;
                    break;
                case 'robbery':
                    chosenCrimeCount = robCount;
                    break;
                case 'shoplifting':
                    chosenCrimeCount = shopliftCount;
                    break;
                case 'vehicle-crime':
                    chosenCrimeCount = vehCount;
                    break;
                case 'violent-crime':
                    chosenCrimeCount = violentCount;
                    break;
                default:
                    chosenCrimeCount = crimeCount;

            }

            crimeMarkers.addTo(mymap);
            $('#intro-row').hide();
            if (choosecrime === 'all') {
                $('#crime-category-summary').text('Total Crimes:');
            } else {
                $('#crime-category-summary').text('Count of \"' + choosecrime + '\"');
            }
            $('#crime-category-count').text(chosenCrimeCount);
            $('#total-crimes').text('Total in area: ' + crimeCount);
            $('#crime-stats-row').show();
        });

        mymap.setView([latitude,longitude], 13);
    }

    mymap.on('click', onMapClick);

});