import React, { useState, useEffect } from 'react';
import { Search, MetricsOverview, MetricsDetails, RecentCache } from './components';
import { getWeather, getCache, handleBackground, handleOpacity } from './utils/app';
import Loader from 'react-loader-spinner';

// [ ] create an error state
// [ ] add updateWeather fn to run incrementally
// [ ] create app context to avoid re-renders
// [X] re-style

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({ zip: '' });
  const [data, setData] = useState({});
  const [cache, setCache] = useState({});
  const [background, setBackground] = useState('clear-day');
  const [opacity, setOpacity] = useState(1.0);
  
  // fetch data and cache on mount
  useEffect(() => {
    let zip = localStorage.getItem('zipcode');
    if (!zip) {
      zip = '10001';
    }
    getWeather(zip, setData);
    setLocation({ zip: zip });
    getCache(setCache);
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // update background with new weather 
  useEffect(() => {
    if (data) {
      let background = handleBackground(data.weather[0].main, data.sys.sunrise, data.sys.sunset, data.timezone);
      setBackground(background);
      let opacity = handleOpacity(data.timezone);
      setOpacity(opacity);
    }
    setTimeout(() => setLoading(false), 1500);
  }, [data.weather]);
  
  return (
    <div className='App' style={loading ? { alignItems: 'center', justifyContent: 'center' } : null }>    
      {!loading && Object.keys(data).length && (
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
