import Map from "../components/Map/Map";
import stylesGlobal from "../Globals.module.css";
import { useState, useEffect } from "react";
import { getBusStations } from "../services/tfl";

function Home() {
  const [busStations, setBusStations] = useState();

  useEffect(() => {
    console.log('Efecti getBusStations');
    getBusStations(setBusStations);
  }, []);

  return (
    <div className={stylesGlobal.homePage}>
      {busStations && <Map busStations={busStations} />}
    </div>
  );
}

export default Home;
