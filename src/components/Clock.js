import React, { useState, useEffect } from 'react';
import { handleTimeZone } from '../utils/handleTimeZone';

const Clock = (props) => {
    console.log(props);
    const [state, setState] = useState({ time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', timeZone: handleTimeZone(props.timezone)}) });
    
    const tick = () => {
        setState({ time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', timeZone: handleTimeZone(props.timezone)}) });
    };

    useEffect(() => {
        setInterval(() => tick(), 60000);
    }, []);

    handleTimeZone(props.timezone)

    return (
        <div className='Clock'>
            <p>{state.time}</p>
        </div>
    )
};

export default Clock;
