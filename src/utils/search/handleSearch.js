import axios from "axios";
import { handleCache } from "../cache/handleCache";
import { useAppState } from "../../AppContext";

export const handleSearch = (e, zip, setData, data, setCache) => {
  e.preventDefault();
  const [{ data }, dispatch] = useAppState();

  const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APP_ID}&units=imperial`)
    .then(res => {
      localStorage.setItem('zipcode', zip);
      // pass zip into response object
      res.data.zip = zip;
      let a = handleCache();
      // let b = setData(res.data);
      // SHOULD BE ABLE TO NOT RETURN WITH CONTEXT API
      let b = dispatch({ type: 'SET_DATA', payload: res.data });
      return a && b;
    })
    .catch(err => {
      // TODO: set up an error state
      console.log(err);
    });
};
