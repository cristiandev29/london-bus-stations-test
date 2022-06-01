export const getBusStations = (callback) => {
  const url = `${
    import.meta.env.VITE_API_TFL
  }/StopPoint/Type/NaptanBusCoachStation?app_id=${
    import.meta.env.VITE_APP_ID_TFL
  }&app_key=${import.meta.env.VITE_APP_KEY_TFL}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const busStations = data.map((busStation) => {
        return {
          id: busStation.id,
          lat: busStation.lat,
          lng: busStation.lon,
          name: busStation.commonName,
        };
      });
      return busStations;
    });
};

export const getArrivals = (callback) => {
  // For problems with api arrivals, i have to use the following url with default busStationId and line:
  const busStationId = "940GZZLUSKW";
  const line = "victoria";
  const url = `${
    import.meta.env.VITE_API_TFL
  }/Line/${line}/Arrivals/${busStationId}?app_id=${
    import.meta.env.VITE_APP_ID_TFL
  }&app_key=${import.meta.env.VITE_APP_KEY_TFL}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const arrivals = data.map((arrival) => {
        return {
          id: arrival.id,
          expectedArrival: arrival.expectedArrival,
        };
      });
      return arrivals;
    });
};
