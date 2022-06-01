export const getBusStations = () => {
  const url = `${
    import.meta.env.VITE_API_TFL
  }/StopPoint/Type/NaptanBusCoachStation?app_id=${
    import.meta.env.VITE_APP_ID_TFL
  }&app_key=${import.meta.env.VITE_APP_KEY_TFL}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const busStations = data.map(
        ({ id, lat, lon: lng, commonName: name }) => {
          return {
            id,
            lat,
            lng,
            name,
          };
        }
      );
      return busStations;
    });
};

export const getArrivals = () => {
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
      const arrivals = data.map(({ id, expectedArrival, destinationName }) => {
        return {
          id,
          expectedArrival,
          destinationName,
        };
      });
      return arrivals;
    });
};
