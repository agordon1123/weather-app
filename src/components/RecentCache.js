import React from 'react';
import axios from 'axios';
import { useAppState } from '../AppContext';

export const RecentCache = () => {
    const [{ data, cache }, dispatch] = useAppState();
    const APP_ID = process.env.REACT_APP_WEATHER_API_KEY; // .env var
    const API_URL = process.env.REACT_APP_WEATHER_API_BASE_URL; // .env var

    const handleCacheClick = (position, city) => {
        axios
            .get(`${API_URL}zip=${city.zip}&APPID=${APP_ID}&units=imperial`)
            .then(res => {
                let cache = JSON.parse(localStorage.getItem('cache'));
    
                switch (position) {
                    case 1:
                        cache.tail = {
                            zip: data.zip,
                            name: data.name
                        };
                        break;
                    case 2:
                        cache.second = cache.tail;
                        cache.tail = {
                            zip: data.zip,
                            name: data.name
                        };
                        break;
                    case 3:
                        cache.third = cache.second;
                        cache.second = cache.tail;
                        cache.tail = {
                            zip: data.zip,
                            name: data.name
                        };
                        break;
                    case 4:
                        cache.head = cache.third;
                        cache.third = cache.second;
                        cache.second = cache.tail;
                        cache.tail = {
                            zip: data.zip,
                            name: data.name
                        };
                        break;
                    default:
                        return;
                }
                localStorage.setItem('zipcode', city.zip);
                localStorage.setItem('cache', JSON.stringify(cache));
                // pass zip into response object
                res.data.zip = city.zip;
                let a = dispatch({ type: 'SET_DATA', payload: res.data });
                let b = dispatch({ type: 'SET_CACHE', payload: cache });
                // DO I NEED RETURN??
                return a && b;
            })
            .catch(err => {
                // TODO: set up an error state
                console.log(err);
            });
    }

    return (
        <div className='RecentCache'>
            {cache && (
                <>  
                    <p onClick={(() => {
                        dispatch({ type: 'SET_LOADING', payload: true });
                        handleCacheClick(1, cache.tail);
                    })}>
                        {cache.tail.name}
                    </p>
                    <p onClick={(() => {
                        dispatch({ type: 'SET_LOADING', payload: true });
                        handleCacheClick(2, cache.second);
                    })}>
                        {cache.second.name}
                    </p>
                    <p onClick={(() => {
                        dispatch({ type: 'SET_LOADING', payload: true });
                        handleCacheClick(3, cache.third);
                    })}>
                        {cache.third.name}
                    </p>
                    <p onClick={(() => {
                        dispatch({ type: 'SET_LOADING', payload: true });
                        handleCacheClick(4, cache.head);
                    })}>
                        {cache.head.name}
                    </p>
                </>
            )}
        </div>
    )
};
