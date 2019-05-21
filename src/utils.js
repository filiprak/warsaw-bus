export default {
    getDegreesFromLatLngVec(latlng0, latlng1) {
        var point1 = new google.maps.LatLng(latlng0);
        var point2 = new google.maps.LatLng(latlng1);
        return google.maps.geometry.spherical.computeHeading(point1, point2);
    }
}
