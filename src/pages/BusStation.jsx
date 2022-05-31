import { useState, useEffect } from "react";
import { getArrivals } from "../services/tfl";
import stylesGlobal from "../Globals.module.css";

function BusStop({ id }) {
  const [arrivals, setArrivals] = useState();

  useEffect(() => {
    getArrivals(setArrivals);
  }, []);

  return (
    <div className={stylesGlobal.busStation}>
      {arrivals && (
        <section>
          {arrivals.map((arrival) => {
            return (
              <article key={arrival.id}>
                <p>{arrival.expectedArrival}</p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}

export default BusStop;
