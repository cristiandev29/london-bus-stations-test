import styles from "./Map.module.css";
import { useEffect, useState, useRef } from "react";
import useMapVisibleArea from "@/hooks/useMapVisibleArea";
import { useLocation } from "wouter";
import MarkerInfo from "@/components/MarkerInfo/MarkerInfo";
import ReactDOMServer from "react-dom/server";
import { mapOptions } from "@/utils/config";

function Map({ busStations }) {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useLocation();
  const mapElement = useRef();
  let mapPolygon = null;

  useEffect(() => {
    setMap(
      new google.maps.Map(document.getElementById("map"), {
        ...mapOptions,
        center: new google.maps.LatLng(51.503, -0.1021),
      })
    );
  }, [mapElement, busStations]);

  useEffect(() => {
    map &&
      google.maps.event.addListenerOnce(map, "idle", function () {
        updateMap();
      }) &&
      google.maps.event.addListener(map, "dragend", function () {
        updateMap();
      }) &&
      google.maps.event.addListener(map, "zoom_changed", function () {
        updateMap();
      });
  }, [map]);

  const updateMap = () => {
    mapPolygon = useMapVisibleArea(map);
    updateMarkers();
  };

  const updateMarkers = () => {
    busStations.forEach((busStation) => {
      const { lat, lng } = busStation;
      const location = new google.maps.LatLng(lat, lng);
      if (google.maps.geometry.poly.containsLocation(location, mapPolygon)) {
        addMarker(location, busStation);
      }
    });
  };

  const addMarker = (location, { name, id }) => {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: name,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "",
    });

    marker.addListener("mouseover", () => {
      const content = ReactDOMServer.renderToString(
        <MarkerInfo name={name} id={id} />
      );
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });

    marker.addListener("mouseout", () => {
      infoWindow.close();
    });

    marker.addListener("click", () => {
      infoWindow.close();
      setLocation("/bus-stop/1");
    });
  };

  return <div id="map" className={styles.map} ref={mapElement}></div>;
}

export default Map;
