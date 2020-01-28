import React, { useState, useEffect } from 'react';
import { Search, MetricsOverview, MetricsDetails, RecentCache } from './components';
import { getWeather, getCache, handleBackground, handleOpacity } from './utils/app';
import Loader from 'react-loader-spinner';

// [ ] create an error state
// [ ] add updateWeather fn to run incrementally

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({ zip: '' });
  const [data, setData] = useState(false);
  const [cache, setCache] = useState(false);
  const [background, setBackground] = useState('clear-day');
  const [opacity, setOpacity] = useState(1.0);
  
  // fetch data and cache on mount
  useEffect(() => {
    if (localStorage.getItem('zipcode')) {
      let zip = localStorage.getItem('zipcode');
      setLocation({ zip: zip });
      getWeather(zip, setData);
    } else {
      // set to NYC if no saved preference
      let zip = '10001';
      getWeather(zip, setData);
    }
    getCache(setCache);
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // update background with new weather 
  useEffect(() => {
    if (data) {
      // update background image and opacity with new weather report
      let condition = handleBackground(data.weather[0].main, data.sys.sunrise, data.sys.sunset, data.timezone);
      setBackground(condition);
      
      let opac = handleOpacity(data.timezone);
      setOpacity(opac)
    }
    setTimeout(() => setLoading(false), 1500);
  }, [data]);
  
  return (
    <div className='App' style={loading ? { alignItems: 'center', justifyContent: 'center' } : null }>    
      {!loading && data && (
        <>
          <div className='metrics-overview' style={{ backgroundImage: 'url(' + require(`./assets/${background}.jpg`) + ')' }}>
            <MetricsOverview data={data}/>
          </div>

          <div className='metrics-details-container' style={{ opacity: opacity }}>
            <Search location={location} setLocation={setLocation} data={data} setData={setData} cache={cache} setCache={setCache} setLoading={setLoading} />
            <RecentCache cache={cache} setCache={setCache} data={data} setData={setData} setLoading={setLoading} />
            <MetricsDetails data={data} />
          </div>
        </>
      )}
      {loading && (
        <>
          <Loader
            type='TailSpin'
            color='#ededed'
            height={100}
            width={100}
            timeout={3000}
          />
        </>
      )}
    </div>
  );
};

export default App;
