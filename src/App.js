import React, { useState, useEffect } from 'react';
import { useAppState } from './AppContext';
import { Search, MetricsOverview, MetricsDetails, RecentCache } from './components';
import { handleBackground, handleOpacity } from './utils/app';
import { getCache } from './utils/cache';
import axios from 'axios';
import Loader from 'react-loader-spinner';

// [ ] create an error state
// [ ] add updateWeather fn to run incrementally
// [X] create app context to avoid re-renders
// [X] re-style

const App = () => {
  const [background, setBackground] = useState('clear-day'); // default
  const [opacity, setOpacity] = useState(1.0); // default
  const [{ data, loading }, dispatch] = useAppState();
  const APP_ID = process.env.REACT_APP_WEATHER_API_KEY; // .env var
  const API_URL = process.env.REACT_APP_WEATHER_API_BASE_URL; // .env var
  
  useEffect(() => { // fetch data and cache on mount
    let zip = localStorage.getItem('zipcode');
    let cache = getCache();
    if (!zip) {
      zip = '10001';
    }
    axios
      .get(`${API_URL}zip=${zip}&APPID=${APP_ID}&units=imperial`)
      .then(res => {
        res.data.zip = zip;
        dispatch({ type: 'SET_DATA', payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    dispatch({ type: 'SET_CACHE', payload: cache });
    dispatch({ type: 'SET_LOADING', payload: false });
  }, []);

  useEffect(() => { // update background with new weather
    if (Object.keys(data).length) {
      dispatch({ type: 'SET_LOADING', payload: true });
      let condition = data.weather[0].main;
      let sunrise = data.sys.sunrise;
      let sunset = data.sys.sunset;
      let timezone = data.timezone;
      let background = handleBackground(condition, sunrise, sunset, timezone);
      let opacity = handleOpacity(data.timezone);
      setBackground(background);
      setOpacity(opacity);
    }
    setTimeout(() => dispatch({ type: 'SET_LOADING', payload: false }), 1500);
  }, [data.weather]);
  
  return (
    <div className='App' style={loading ? { alignItems: 'center', justifyContent: 'center' } : null }>
      {!loading && Object.keys(data).length && (
        <>
          <div className='metrics-overview' style={{ backgroundImage: 'url(' + require(`./assets/${background}.jpg`) + ')' }}>
            <MetricsOverview />
          </div>

          <div className='metrics-details-container' style={{ opacity: opacity }}>
            <Search />
            <RecentCache />
            <MetricsDetails />
          </div>
        </>
      )}
      {loading && (
        <Loader
          type='TailSpin'
          color='#ededed'
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </div>
  );
};

export default App;
