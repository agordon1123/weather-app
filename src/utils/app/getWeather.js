import axios from "axios";

export async function getWeather(zip) {
  const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
  let target = await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APP_ID}&units=imperial`)
    .then(res => {
      console.log(res);
      res.data.zip = zip;
      // TODO: handleBackground once receive weather
      return res.data;
    })
    .catch(err => {
      return console.log(err);
    });
    return target;
}
