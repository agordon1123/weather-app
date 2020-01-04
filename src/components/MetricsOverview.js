import React from 'react';
import DateTime from './DateTime';

const MetricsOverview = props => {
    const { data } = props;

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
                {/* <i class="fas fa-bolt"></i> */}
            </div>
        </div>
    )
};

export default MetricsOverview;
