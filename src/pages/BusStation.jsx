import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { getArrivals } from "../services/tfl";

function BusStation({ id }) {
  const [arrivals, setArrivals] = useState([]);
  const [match, params] = useRoute("/bus-station/:id/:name");

  useEffect(() => {
    getArrivals().then((items) => {
      setArrivals(items);
    });
  }, []);

  return (
    <div className="bus-station">
      <div>
        <h2>{decodeURIComponent(params.name)}</h2>
      </div>
      <h3>Próximas llegadas</h3>
      {arrivals && (
        <section>
          {arrivals.map((arrival) => {
            return (
              <article className="arrival" key={arrival.id}>
                <p className="expected-arrival">
                  {new Intl.DateTimeFormat("es-ES", {
                    dateStyle: "medium",
                    timeStyle: "long",
                  }).format(new Date(arrival.expectedArrival))}
                </p>
                <p>Destino: {arrival.destinationName}</p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}

export default BusStation;
