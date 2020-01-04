import React from 'react';
import { handleChange, handleSearch } from '../utils/search';

export const Search = props => {
    const { location, setLocation, data, setData, setCache } = props;
    
    return(
        <div className='Search'>
            <div className='input-container'>
                <input onChange={e => handleChange(e, setLocation, 'zip')} placeholder='zipcode' className='search-input' />
            </div>

            <button onClick={e => handleSearch(e, location.zip, setData, data, setCache)} type="submit">
                Go
            </button>
        </div>
    )
};
