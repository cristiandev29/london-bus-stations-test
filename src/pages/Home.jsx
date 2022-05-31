import Map from "../components/Map/Map";
import stylesGlobal from "../Globals.module.css";

function Home() {
  return (
    <div className={stylesGlobal.homePage}>
      <Map></Map>
    </div>
  );
}

export default Home;
