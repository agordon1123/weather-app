import React from 'react';
import DateTime from './DateTime';

// TODO: insert date into metrics-overview
//       create seperate component for date to live

// TODO: create a ticking clock component
const Metrics = ({ props }) => {
    return (
        <div className='Metrics'>
            <div className='metrics-overview'>
                {/* TODO: rename container */}
                <div className='metrics-overview-container'>
                    <p className='currentTemp'>{Math.round(props.main.temp)}°</p>
                    <div className='name-date-container'>
                        <h3 className='cityName'>{props.name}</h3>
                        <DateTime timezone={props.timezone} />
                    </div>
                    <p className='condition'>{props.weather[0].main}</p>
                </div>
            </div>

            {/* <p>{props.weather[0].description}</p> */}
            <div className='metrics-details'>
                <p>Feels like: {props.main.feels_like}℉</p>
                <p>Humidity: {props.main.humidity}%</p>
                <p>Wind: {props.wind.speed}mph {props.wind.deg}℉</p>
                <p>{props.sys.sunrise}</p>
                <p>{props.sys.sunset}</p>
            </div>
        </div>
    )
}

export default Metrics;
