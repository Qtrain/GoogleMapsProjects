// Reference to the Firebase database.
var firebase = new Firebase("https://brilliant-fire-4963.firebaseio.com/#-KARL5tO7W9YAthZDx0M|0f55e290ebd5b021beaa720d74659998");

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 3
    });

    // Add marker on user click
    map.addListener('click', function(e) {
        firebase.push({lat: e.latLng.lat(), lng: e.latLng.lng()});
    });

    // Create a heatmap.
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: [],
        map: map,
        radius: 8
    });

    firebase.on("child_added", function(snapshot, prevChildKey) {
        // Get latitude and longitude from Firebase.
        var newPosition = snapshot.val();

        // Create a google.maps.LatLng object for the position of the marker.
        // A LatLng object literal (as above) could be used, but the heatmap
        // in the next step requires a google.maps.LatLng object.
        var latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);

        heatmap.getData().push(latLng);
    });
}