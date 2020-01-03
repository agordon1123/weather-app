import React from 'react';

const RecentCache = props => {
    console.log(props);

    const getCacheOnMount = () => {
        if (localStorage.getItem('cache')) {
            const cache = localStorage.getItem('cache');
            // insert into tail
            // remove from head
            const tail = cache.tail;
            const second = cache.second;
            const third = cache.third;
            const head = cache.head;
            // TODO: structure how the items will go into the cache
            // Will need keys for position that will need to be assigned on new search

            /* 
            user enters new search => 
            last state becomes cache.first
            cache.last or cache.fourth will need to be removed
            old cache.first becomes second, second becomes third, third becomes last(fourth)

            will need two functions: one to handle zip code search and one to handleClick
            */

        } else {
            // const var1 = 'Birmingham' and so on...
            // will need to be a state? it will need to be updated by the handlesubmit fn
            //      and may need to be held in App.js
            // Probably in App.js because that's where the current city and zip are stored
        }
    }
    return (
        <div className='RecentCache'>

        </div>
    )
};

export default RecentCache;
