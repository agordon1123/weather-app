import React, { useState, useEffect } from "react";
import Metrics from './components/Metrics';
import Nav from './components/Nav';
import { getWeatherOnMount } from './utils';

const App = () => {
  const [location, setLocation] = useState({ zip: "" });
  const [data, setData] = useState(false);
  console.log(data);

  // TODO: initialize isLoading state
  // fetch data on mount and render metrics component
  useEffect(() => {
    if (localStorage.getItem('zipcode')) {
      // getWeather with zip from storage
      let zip = localStorage.getItem('zipcode')
      setLocation({ zip: zip });
      // TODO: set location as placeholder in search bar and
      //       see if it gets wacky when you start to search
      getWeatherOnMount(zip, setData)
    } else {
      // set to NYC if no saved preference
      let zip = '10001'
      getWeatherOnMount(zip, setData)
    }
  }, [])

  return (
    <div className="App">
        {/* <Nav setLocation={setLocation} zip={location.zip} setData={setData} /> */}
        
        {data && (
            <Metrics props={data} />
        )}
    </div>
  );
};

export default App;
