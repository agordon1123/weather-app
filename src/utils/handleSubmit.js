import axios from "axios";

export const handleSubmit = (e, zip, setter, persist) => {
    e.preventDefault();

    if (persist === true) {
      localStorage.setItem('zipcode', zip)
    }

    const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APP_ID}&units=imperial`)
        .then(succ => {
          return setter(succ.data)
        })
        .catch(err => {
          // TODO: set up an error state
          console.log(err)
        });
};
