import React from 'react';
import DateTime from './DateTime';
import Search from './Search';
import RecentCache from './RecentCache';
import Moment from 'react-moment';
import 'moment-timezone';

// TODO: possibly incorporate fontawesome weather icons
// TODO: break up into individual components
// TODO: remove div around components and correct stylesheet
const Metrics = props => {
    const { setData, data, setLocation, location, setCache, cache } = props;
    
    return (
        <div className='Metrics'>
            <div className='metrics-overview'>
                {/* TODO: rename container */}
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
            </div>

            <div className='metrics-details-container'>
                {/* <p>{props.weather[0].description}</p> */}
                <div className='search-container'>
                    <Search location={location} setLocation={setLocation} data={data} setData={setData} cache={cache} setCache={setCache} />
                </div>

                <RecentCache cache={cache} setCache={setCache} data={data} setData={setData} />

                <div className='metrics-details'>
                    <p className='metric metric-header' style={{ textAlign: 'left' }}>Weather Details</p>
                    <p className='metric'>Feels like:</p>
                    <p className='metric'>{Math.round(data.main.feels_like)}℉</p>
                    <p className='metric'>Humidity:</p>
                    <p className='metric'>{data.main.humidity}%</p>

                    <p className='metric'>Wind:</p>
                    <p className='metric'>{data.wind.speed} mph</p>
                    <p className='metric'>Sunrise:</p>
                    <Moment className='metric' unix format='hh:mm a'>{data.sys.sunrise}</Moment>
                    <p className='metric'>Sunset:</p>
                    <Moment className='metric' unix format='hh:mm a'>{data.sys.sunset}</Moment>
                </div>
            </div>
        </div>
    )
}

export default Metrics;
