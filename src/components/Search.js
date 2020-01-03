import React from 'react';
import { handleChange } from '../utils/handleChange';
import { handleSubmit } from '../utils/handleSubmit';

const Search = props => {
    return(
        <div className='Search'>
            <input onChange={e => handleChange(e, props.setLocation, 'zip')} placeholder='zipcode' className='search-input' />
            <button onClick={e => handleSubmit(e, props.location.zip, props.setData, false)} type="submit">
                Go
            </button>
        </div>
    )
};

export default Search;
