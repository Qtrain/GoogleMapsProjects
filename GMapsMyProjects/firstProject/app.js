function loadMap() {

    //map controls i.e. zoop pan etc..
    var mapOptions = {
        center:new google.maps.LatLng(40.1070152, -75.3353874),
        zoom:11,
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        mapTypeControl:true,
        streetViewControl:true,
        overviewMapControl:true,
        rotateControl:true
    };

    var map = new google.maps.Map(document.getElementById("map"),mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap);