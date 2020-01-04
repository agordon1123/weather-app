import axios from 'axios';


export const handleClick = (position, city, data, setData, setCache) => {
    // position == position in queue
    
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

            succ.data.zip = city.zip;
            let a = localStorage.setItem('cache', JSON.stringify(cache));
            let b = setData(succ.data);
            let c = setCache(cache);
            return a && b && c;
        })
        .catch(err => {
            // TODO: set up an error state
            console.log(err)
        });
}