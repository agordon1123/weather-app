import React from 'react';
import { useAppState } from '../AppContext';
import { DateTime } from './DateTime';

export const MetricsOverview = () => {
    const [{ data }, dispatch] = useAppState();

    return (
        <div className='metrics-overview-container'>
            <p className='currentTemp'>{Math.round(data.main.temp)}°</p>
            <div className='name-date-container'>
                <h3 className='cityName'>{data.name}</h3>
                <DateTime timezone={data.timezone} />
            </div>

            <div className='condition-icon-container'>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather-icon' />
                <p className='condition'>{data.weather[0].main}</p>
            </div>
        </div>
    )
};
