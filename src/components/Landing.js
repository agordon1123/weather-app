import React, { useState, useEffect } from "react";
import Metrics from './Metrics';
import { handleSubmit } from '../utils/getWeather';

const Landing = () => {
  const [state, setState] = useState({ zip: "" });
  const [data, setData] = useState(null);
  console.log(data)

  const handleChange = e => {
    setState({ zip: e.target.value });
  };

  return (
    <div className="landing">
      <input onChange={handleChange} />
      <br />
      Remember
      <input type='checkbox' />
      <br />
      <button onClick={e => handleSubmit(e, state.zip, setData)} type="submit">
        Go
      </button>
      {data && (
          <Metrics props={data} />
      )}
    </div>
  );
};

export default Landing;