import axios from "axios";

export const getWeatherOnMount = (zip, setter) => {

    const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APP_ID}&units=imperial`)
        .then(succ => {
          return setter(succ.data)
        })
        .catch(err => {
          console.log(err)
        });
};
