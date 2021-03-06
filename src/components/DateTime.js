import React, { useState, useEffect, useRef } from 'react';
import { handleTimeZone } from '../utils/app';
import Moment from 'react-moment';
import 'moment-timezone';

export const DateTime = props => {
    const [state, setState] = useState({ time: new Date() });
    const isCurrent = useRef(true);
    
    const tick = () => {
        if (isCurrent.current) {
            setState({ time: new Date() });
        }
    };

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    }, []);

    useEffect(() => {
        // updates time at top of minute and starts interval to update every minute
        const ms = 1000 - state.time.getMilliseconds();
        const seconds = 60 - state.time.getSeconds();
        let offset = ms + (seconds * 1000);
        setTimeout(() => tick(), offset);
        setTimeout(() => setInterval(() => tick(), 60000), offset);
    }, [state.time]);

    return (
        <div className='Date'>
            <Moment unix tz={handleTimeZone(props.timezone, 'datetime')} format='hh:mm'>
                {state.time.getTime() / 1000}
            </Moment>
            -
            <Moment unix tz={handleTimeZone(props.timezone, 'datetime')} format={`dddd, D MMM 'YY`}>
                {state.time.getTime() / 1000}
            </Moment>
        </div>
    );
};
