import React from 'react';

const Metrics = ({ props }) => {
    return (
        <div className='Metrics'>
            <div className='title-info'>
                <h3>{props.name}</h3>
                <p>{props.weather[0].main}: {props.weather[0].description}</p>
            </div>

            <div className='metrics-sub-container'>
                <p>Current: {props.main.temp}℉</p>
                <p>Feels like: {props.main.feels_like}℉</p>
                <p>Humidity: {props.main.humidity}%</p>
                <p>Wind: {props.wind.speed}mph {props.wind.deg}℉</p>
                <p>{props.sys.sunrise}</p>
                <p>{props.sys.sunset}</p>
            </div>

            <div className='time'>
                <p>{props.timezone}</p>
            </div>
        </div>
    )
}

export default Metrics;
