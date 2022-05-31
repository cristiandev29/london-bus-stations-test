import styles from "./Map.module.css";
import { useEffect, useState, useRef } from "react";
import useMapVisibleArea from "../../hooks/useMapVisibleArea";
import { useLocation } from "wouter";

function Map() {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useLocation();
  const mapElement = useRef();
  let mapPolygon = null;

  const checkPointsCoordinates = [
    { lat: 40.4531101, lng: -3.689555 },
    { lat: 51.508044, lng: -0.126487 },
  ];

  useEffect(() => {
    setMap(
      new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(51.503, -0.1021),
        zoom: 12,
        fullscreenControl: false,
        mapTypeControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "all",
            stylers: [
              {
                visibility: "on",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "all",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      })
    );
  }, [mapElement]);

  useEffect(() => {
    console.log(map);
    map &&
      google.maps.event.addListenerOnce(map, "idle", function () {
        mapPolygon = useMapVisibleArea(map);
        // CHECK POINTS LUEGO CAMBIAR
        checkIfPointIsInMap(checkPointsCoordinates);
      }) &&
      google.maps.event.addListener(map, "dragend", function () {
        mapPolygon = useMapVisibleArea(map);
        // CHECK POINTS
        checkIfPointIsInMap(checkPointsCoordinates);
      }) &&
      google.maps.event.addListener(map, "zoom_changed", function () {
        mapPolygon = useMapVisibleArea(map);
        // CHECK POINTS
        checkIfPointIsInMap(checkPointsCoordinates);
      });
  }, [map]);

  const checkIfPointIsInMap = (coordinates) => {
    coordinates.forEach((item) => {
      const { lat, lng } = item;
      const checkPoint = new google.maps.LatLng(lat, lng);

      console.log("mapPolygon in checkIfPointIsInMap", mapPolygon);
      if (google.maps.geometry.poly.containsLocation(checkPoint, mapPolygon)) {
        addMarker(checkPoint);
      }
    });
  };

  const addMarker = (location) => {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Bus Stop",
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    });

    //RENDER COMPONENTE REACT
    const infoWindow = new google.maps.InfoWindow({
      content: "<div><h3>HOLA</h3></div>",
    });

    marker.addListener("mouseover", () => infoWindow.open(map, marker));
    marker.addListener("mouseout", () => infoWindow.close());
    marker.addListener("click", () => {
      infoWindow.close();
      setLocation("/bus-stop/1");
    });
  };

  return <div id="map" className={styles.map} ref={mapElement}></div>;
}

export default Map;
