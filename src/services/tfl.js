export const getBusStations = (callback) => {
  const url = `${
    import.meta.env.VITE_API_TFL
  }/StopPoint/Type/NaptanBusCoachStation?app_id=${
    import.meta.env.VITE_APP_ID_TFL
  }&app_key=${import.meta.env.VITE_APP_KEY_TFL}`;

  fetch(url)
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
      callback(busStations);
    });
};
