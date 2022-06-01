import Map from "../components/Map/Map";
import { useState, useEffect } from "react";
import { getBusStations } from "../services/tfl";

function Home() {
  const [busStations, setBusStations] = useState([]);

  useEffect(() => {
    getBusStations().then((items) => {
      setBusStations(items);
    });
  }, []);

  return (
    <div className="home-page">
      {busStations && <Map busStations={busStations} />}
    </div>
  );
}

export default Home;
