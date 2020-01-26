import React from 'react';
import { handleClick } from '../utils/cache';

export const RecentCache = props => {
    const { cache, setCache, data, setData, setLoading } = props;

    return (
        <div className='RecentCache'>
            {cache && (
                <>  
                    <p onClick={(() => {
                        setLoading(true);
                        handleClick('tail', cache.tail, data, setData, setCache);
                    })}>
                        {cache.tail.name}
                    </p>

                    <p onClick={(() => {
                        setLoading(true);
                        handleClick('second', cache.second, data, setData, setCache);
                    })}>
                        {cache.second.name}
                    </p>
                    
                    <p onClick={(() => {
                        setLoading(true);
                        handleClick('third', cache.third, data, setData, setCache);
                    })}>
                        {cache.third.name}
                    </p>
                    
                    <p onClick={(() => {
                        setLoading(true);
                        handleClick('head', cache.head, data, setData, setCache);
                    })}>
                        {cache.head.name}
                    </p>
                </>
            )}
        </div>
    )
};
