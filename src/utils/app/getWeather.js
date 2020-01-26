import axios from "axios";

export const getWeather = (zip, cb)  => {
  const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APP_ID}&units=imperial`)
      .then(res => {
        res.data.zip = zip;
        // TODO: handleBackground once receive weather
        return cb(res.data);
      })
      .catch(err => {
        console.log(err)
      });
};
