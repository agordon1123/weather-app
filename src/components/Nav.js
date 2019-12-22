import React, { useState } from 'react';
import { handleChange } from '../utils/handleChange';
import { handleSubmit } from '../utils/handleSubmit';

const Nav =  props  => {
    const [persist, setPersist] = useState(false);

    return (
        <div className='Nav'>
            <input onChange={e => handleChange(e, props.setLocation, 'zip')} placeholder='zipcode' className='search' />
            <p>Remember</p>
            <input type='checkbox' onClick={() => setPersist(!persist)} />
            <button onClick={e => handleSubmit(e, props.zip, props.setData, persist)} type="submit">
                Go
            </button>
        </div>
    );    
}

export default Nav;
