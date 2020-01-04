import React, { useState, useEffect } from 'react';
import { Search, MetricsOverview, MetricsDetails, RecentCache } from './components';
import { getWeatherOnMount, getCacheOnMount } from './utils/app';

const App = () => {
  const [location, setLocation] = useState({ zip: '' });
  const [data, setData] = useState(false);
  const [cache, setCache] = useState(false);

  // fetch data on mount and render metrics component
  useEffect(() => {
    if (localStorage.getItem('zipcode')) {
      let zip = localStorage.getItem('zipcode');
      setLocation({ zip: zip });
      getWeatherOnMount(zip, setData);
    } else {
      // set to NYC if no saved preference
      let zip = '10001';
      getWeatherOnMount(zip, setData);
    }

    getCacheOnMount(setCache);
  }, []);

  return (
    <div className='App'>        
      {data && (
        <>
          <div className='metrics-overview'>
            <MetricsOverview data={data} />
          </div>

          <div className='metrics-details-container'>
            <Search location={location} setLocation={setLocation} data={data} setData={setData} cache={cache} setCache={setCache} />
            <RecentCache cache={cache} setCache={setCache} data={data} setData={setData} />
            <MetricsDetails data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
