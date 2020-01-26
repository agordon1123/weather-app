import axios from 'axios';

export const handleClick = (position, city, data, setData, setCache) => {
    // position == position in queue - hardcoded
    
    const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
    axios
        .get(`http://api.openweathermap.org/data/2.5/weather?zip=${city.zip}&APPID=${APP_ID}&units=imperial`)
        .then(succ => {
            // pass zip into response object
            let cache = JSON.parse(localStorage.getItem('cache'));

            switch (position) {
                case 'tail':
                    cache.tail = {
                        zip: data.zip,
                        name: data.name
                    };
                    break;
                case 'second':
                    cache.second = cache.tail;
                    cache.tail = {
                        zip: data.zip,
                        name: data.name
                    };
                    break;
                case 'third':
                    cache.third = cache.second;
                    cache.second = cache.tail;
                    cache.tail = {
                        zip: data.zip,
                        name: data.name
                    };
                    break;
                case 'head':
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
            succ.data.zip = city.zip;
            let a = setData(succ.data);
            let b = setCache(cache);
            return a && b;
        })
        .catch(err => {
            // TODO: set up an error state
            console.log(err)
        });
}