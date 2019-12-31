import React, { useState, useEffect } from 'react';
import { handleTimeZone } from '../utils/handleTimeZone';
import Moment from 'react-moment';
import 'moment-timezone';

const DateTime = props => {
    console.log(props);
    const [state, setState] = useState({ timeStamp: new Date().getTime() / 1000 })
    console.log(state.timeStamp)
    
    const tick = () => {
        setState({ timeStamp: new Date().getTime() / 1000 });
    };

    // const day = state.date.
    // WHAT IF I CREATE A NEW DATE OBJECT THAT I CAN USE getDay() etc AND THEN CREATE A NEW
    // LOCALE TIME STRING AND COMPARE THE HOURS... IF 

    // TODO: may be including this in the clock component because "Date" is a javscript keyword
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        // TODO: call on mount and use setTimeout to call the setInterval fn 
        // based on num of milliseconds in first time
        setInterval(() => tick(), 60000);
    }, []);

    return (
        <div className='Date'>
            <Moment unix tz={handleTimeZone(props.timezone)} format='hh:mm'>
                {state.timeStamp}
            </Moment>
            -
            <Moment unix tz={handleTimeZone(props.timezone)} format={`dddd, D MMM 'YY`} >
                {state.timeStamp}
            </Moment>
        </div>
    );
};

export default DateTime;
