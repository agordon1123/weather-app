import React, { useState, useEffect } from "react";
import Metrics from './components/Metrics';
import { getWeatherOnMount } from './utils';
import { getCacheOnMount } from "./utils/getCacheOnMount";

// TODO: initialize isLoading state
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
    <div className="App">        
      {data && (
        <Metrics 
          data={data}
          setData={setData}
          setLocation={setLocation}
          location={location}
          setCache={setCache}
          cache={cache}
        />
      )}
    </div>
  );
};

export default App;
