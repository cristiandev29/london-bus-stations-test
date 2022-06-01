import { useState, useEffect } from "react";
import { getArrivals } from "../services/tfl";

function BusStop({ id }) {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    getArrivals().then((items) => {
      setArrivals(items);
    });
  }, []);

  return (
    <div className="bus-station">
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
