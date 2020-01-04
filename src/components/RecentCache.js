import React from 'react';
import { handleClick } from '../utils/handleClick';

const RecentCache = props => {
    const { cache, setCache, data, setData } = props;

    return (
        <div className='RecentCache'>
            {cache && (
                <>  
                    <p onClick={(() => handleClick('tail', cache.tail, data, setData, setCache))}>{cache.tail.name}</p>
                    <p onClick={(() => handleClick('second', cache.second, data, setData, setCache))}>{cache.second.name}</p>
                    <p onClick={(() => handleClick('third', cache.third, data, setData, setCache))}>{cache.third.name}</p>
                    <p onClick={(() => handleClick('head', cache.head, data, setData, setCache))}>{cache.head.name}</p>
                </>
            )}
        </div>
    )
};

export default RecentCache;