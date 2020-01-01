import React, { useState, useEffect } from "react";
import Metrics from './components/Metrics';
import { getWeatherOnMount } from './utils';

// TODO: initialize isLoading state
const App = () => {
  const [location, setLocation] = useState({ zip: "" });
  const [data, setData] = useState(false);

  // fetch data on mount and render metrics component
  useEffect(() => {
    if (localStorage.getItem('zipcode')) {
      let zip = localStorage.getItem('zipcode');
      setLocation({ zip: zip });
      // TODO: set location as placeholder in search bar and
      //       see if it gets wacky when you start to search
      getWeatherOnMount(zip, setData);
    } else {
      // set to NYC if no saved preference
      let zip = '10001';
      getWeatherOnMount(zip, setData);
    }
  }, []);

  return (
    <div className="App">        
        {data && (
            <Metrics 
              setData={setData} 
              data={data} 
              setLocation={setLocation} 
              location={location} 
            />
        )}
    </div>
  );
};

export default App;
