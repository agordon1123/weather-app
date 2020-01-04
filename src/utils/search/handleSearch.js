import axios from "axios";
import { handleCache } from "../cache/handleCache";

export const handleSearch = (e, zip, setData, data, setCache) => {
  e.preventDefault();

  const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APP_ID}&units=imperial`)
    .then(succ => {
      // pass zip into response object
      succ.data.zip = zip;
      let a = handleCache(data, setCache);
      let b = setData(succ.data);
      return a && b;
    })
    .catch(err => {
      // TODO: set up an error state
      console.log(err)
    });
};
