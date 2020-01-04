import React from 'react';
import { handleChange } from '../utils/handleChange';
import { handleSearch } from '../utils/handleSearch';

const Search = props => {
    const { location, setLocation, data, setData, setCache } = props;
    
    return(
        <div className='Search'>
            <input onChange={e => handleChange(e, setLocation, 'zip')} placeholder='zipcode' className='search-input' />
            <button onClick={e => handleSearch(e, location.zip, setData, data, setCache)} type="submit">
                Go
            </button>
        </div>
    )
};

export default Search;
