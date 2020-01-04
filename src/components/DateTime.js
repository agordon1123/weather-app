import React, { useState, useEffect } from 'react';
import { handleTimeZone } from '../utils/app';
import Moment from 'react-moment';
import 'moment-timezone';

export const DateTime = props => {
    const [state, setState] = useState({ time: new Date() });
    
    // TODO: Is this function necessary or can we directly just setState?
    const tick = () => {
        setState({ time: new Date() });
    };

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
            <Moment unix tz={handleTimeZone(props.timezone)} format='hh:mm'>
                {state.time.getTime() / 1000}
            </Moment>
            -
            <Moment unix tz={handleTimeZone(props.timezone)} format={`dddd, D MMM 'YY`}>
                {state.time.getTime() / 1000}
            </Moment>
        </div>
    );
};
