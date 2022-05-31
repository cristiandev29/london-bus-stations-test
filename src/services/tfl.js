export const getBusStops = () => {
  const url = `process.env.VITE_API_TFL?app_id=${process.env.VITE_APP_ID_TFL}&app_key=${process.env.VITE_APP_KEY_TFL}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
