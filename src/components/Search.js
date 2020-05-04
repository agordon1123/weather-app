import React, { useState } from 'react';
import { useAppState } from '../AppContext';
import { getWeather } from '../utils/app';

export const Search = () => {
    const [zipcode, setZipcode] = useState('');
    const [{ data, cache }, dispatch] = useAppState();

    const handleChange = e => {
        setZipcode(e.target.value);
    }

    const handleSearch = e => {
        e.preventDefault();
        let data = getWeather(zipcode);
        handleCacheRotate();
        dispatch({ type: 'SET_DATA', payload: data });
    };

    const handleCacheRotate = () => {
        const newCache = {};
        newCache.tail = {
            zip: data.zip,
            name: data.name
        };
        newCache.second = cache.tail;
        newCache.third = cache.second;
        newCache.head = cache.third;
        delete newCache.fourth;
    
        localStorage.setItem('cache', JSON.stringify(newCache));
        dispatch({ type: 'SET_CACHE', payload: newCache })
    };
    
    return(
        <div className='Search'>
            <div className='input-container'>
                <input 
                    name='zipcode' 
                    className='search-input' 
                    placeholder='zipcode' 
                    onChange={handleChange} 
                />
            </div>

            <button 
                type="submit"
                onClick={event => {
                    dispatch({ type: 'SET_LOADING', payload: true });
                    handleSearch(event);
                }}
            >
                Go
            </button>
        </div>
    )
};
