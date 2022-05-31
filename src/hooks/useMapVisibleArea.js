export default function (map) {
  const neLat = map.getBounds().getNorthEast().lat();
  const neLng = map.getBounds().getNorthEast().lng();
  const swLat = map.getBounds().getSouthWest().lat();
  const swLng = map.getBounds().getSouthWest().lng();

  const nwLat = new google.maps.LatLng(neLat, swLng).lat();
  const nwLng = new google.maps.LatLng(neLat, swLng).lng();

  const seLat = new google.maps.LatLng(swLat, neLng).lat();
  const seLng = new google.maps.LatLng(swLat, neLng).lng();

  const mapPolygonCords = [
    { lat: neLat, lng: neLng },
    { lat: nwLat, lng: nwLng },
    { lat: swLat, lng: swLng },
    { lat: seLat, lng: seLng },
  ];

  const mapPolygon = new google.maps.Polygon({
    paths: mapPolygonCords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  return mapPolygon;
}
