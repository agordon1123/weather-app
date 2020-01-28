import React from 'react';
import Moment from 'react-moment';
import { handleTimeZone } from '../utils/app';
import 'moment-timezone';

export const MetricsDetails = props => {
    const { data } = props;

    return (
        <div className='MetricsDetails'>
            <p className='metric-header' style={{ textAlign: 'left' }}>Weather Details</p>
            <p className='metric'>Feels like:</p>
            <p className='metric'>{Math.round(data.main.feels_like)}℉</p>
            <p className='metric'>Humidity:</p>
            <p className='metric'>{data.main.humidity}%</p>

            <p className='metric'>Wind:</p>
            <p className='metric'>{data.wind.speed} mph</p>
            <p className='metric'>Sunrise:</p>
            <Moment className='metric' unix tz={handleTimeZone(data.timezone, 'datetime')} format='hh:mm a'>{data.sys.sunrise}</Moment>
            <p className='metric'>Sunset:</p>
            <Moment className='metric' unix tz={handleTimeZone(data.timezone, 'datetime')} format='hh:mm a'>{data.sys.sunset}</Moment>
        </div>
    )
};
