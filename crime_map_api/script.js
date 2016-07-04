$(function() {

    //counts for various crimes
    var crimeCount = 0;
    var chosenCrimeCount = 0;
    var asbCount = 0; //Antisocial Behaviour
    var burgCount = 0;
    var cdaCount = 0; //(criminal damage arson)
    var drugsCount = 0;
    var theftCount = 0;
    var pdwCount = 0; //Weapons charges
    var robCount = 0;
    var shopliftCount = 0;
    var vehCount = 0; // Vehicle Crimes
    var violentCount = 0;
    var otherCount = 0;

    //   =================== INITIALIZE MAP =========================

    $('#crime-stats-row').hide();



    var mymap = L.map('mapid').setView([52.629729, -1.131592], 9);
    mymap.doubleClickZoom.disable();    
    debugger;

    L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'png'
    }).addTo(mymap);

    mymap.on('dblclick', onMapClick);

    mymap.on('mouseover', function(e) {
        //open popup;
        console.log("mouseover event");
    });

    var crimeMarkers = L.layerGroup([], {
        eachLayer: oneachLayer
    }).addTo(mymap);

    var popup = L.popup();


    function oneachLayer(feature, layer) {
        console.log("onEachFeature activated");
        mymap.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            // click: onMapClick
            // doubleclick: onMapClick
        });
    }

    function highlightFeature() {
        // this.openPopup();
    }

    function resetHighlight() {
        // this.closePopup();
    }

    function onMapClick(e) {
        var latitude = e.latlng.lat.toString();
        var longitude = e.latlng.lng.toString();
        console.log("Click Event");
        mymap.removeLayer(crimeMarkers);
        countReset();

        // Re-initialize crimeMarkers, starting with red circle. 
        crimeMarkers = L.layerGroup([
            radiusCircle = L.circle([e.latlng.lat, e.latlng.lng], 1600, {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2
            })
        ]).addTo(mymap);
        mymap.setView([latitude, longitude], 13);

    }

    function countReset() {
        crimeCount = 0;
        asbCount = 0; //Antisocial Behaviour
        burgCount = 0;
        cdaCount = 0; // (criminal damage arson)
        drugsCount = 0;
        theftCount = 0;
        pdwCount = 0; //Weapons charges
        robCount = 0;
        shopliftCount = 0;
        vehCount = 0; // Vehicle Crimes
        violentCount = 0;
        otherCount = 0;
    }

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
        }
    }


});