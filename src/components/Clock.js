import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [state, setState] = useState({ time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
    
    const tick = () => {
        setState({ time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) });
    };

    useEffect(() => {
        setInterval(() => tick(), 60000);
    }, []);

    return (
        <div className='Clock'>
            <p>{state.time}</p>
        </div>
    )
};

export default Clock;
