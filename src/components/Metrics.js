import React from 'react';

const Metrics = ({ props }) => {
    console.log(props)
    return (
        <div className='Metrics'>
            <h3>{props.name}</h3>
            <p>{props.main.temp}℉</p>
            <p>Feels like: {props.main.feels_like}℉</p>
            <p>Humidity: {props.main.humidity}%</p>
            <p>{props.weather[0].main}: {props.weather[0].description}</p>
            <p>Wind: {props.wind.speed}mph {props.wind.deg}℉</p>
            <p>{props.sys.sunrise}</p>
            <p>{props.sys.sunset}</p>
            <p>{props.timezone}</p>
        </div>
    )
}

export default Metrics;
