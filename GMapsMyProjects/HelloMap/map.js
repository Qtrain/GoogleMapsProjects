var locations = [
    ['Bondi Beach', '850 Bay st 04 Toronto, Ont'],
    ['Coogee Beach', '932 Bay Street, Toronto, ON M5S 1B1'],
    ['Cronulla Beach', '61 Town Centre Court, Toronto, ON M1P'],
    ['Manly Beach', '832 Bay Street, Toronto, ON M5S 1B1'],
    ['Maroubra Beach', '606 New Toronto Street, Toronto, ON M8V 2E8']
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(43.253205,-80.480347),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();
var geocoder = new google.maps.Geocoder();

marker, i;

for (i = 0; i < locations.length; i++) {
    geocodeAddress(locations[i]);
}

function geocodeAddress(location) {
    geocoder.geocode( { 'address': location[1]}, function(results, status) {
        //alert(status);
        if (status == google.maps.GeocoderStatus.OK) {

            //alert(results[0].geometry.location);
            map.setCenter(results[0].geometry.location);
            createMarker(results[0].geometry.location,location[0]+"<br>"+location[1]);
        }
        else
        {
            alert("some problem in geocode" + status);
        }
    });
}

function createMarker(latlng,html){
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
    });
}