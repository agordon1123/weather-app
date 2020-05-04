// import React from 'react';
// import { useAppState } from "../../AppContext";
// import axios from 'axios';


// export const handleCacheRotate = () => {
//     // let cache = JSON.parse(localStorage.getItem('cache'));
//     const [{ data, cache }, dispatch] = useAppState();
//     const newCache = {};

//     newCache.tail = {
//         zip: data.zip,
//         name: data.name
//     };
//     newCache.second = cache.tail;
//     newCache.third = cache.second;
//     newCache.head = cache.third;
//     delete newCache.fourth;

//     localStorage.setItem('cache', JSON.stringify(newCache));
//     dispatch({ type: 'SET_CACHE', payload: newCache })
// };


// export const handleCacheClick = (position, city/* , city, data, setData, setCache*/) => {
//     // position == position in queue - hardcoded
//     const [{ data }, dispatch] = useAppState();
//     const APP_ID = process.env.REACT_APP_WEATHER_API_KEY;
//     axios
//         .get(`https://api.openweathermap.org/data/2.5/weather?zip=${city.zip}&APPID=${APP_ID}&units=imperial`)
//         .then(res => {
//             // pass zip into response object
//             let cache = JSON.parse(localStorage.getItem('cache'));

//             switch (position) {
//                 case 1:
//                     cache.tail = {
//                         zip: data.zip,
//                         name: data.name
//                     };
//                     break;
//                 case 2:
//                     cache.second = cache.tail;
//                     cache.tail = {
//                         zip: data.zip,
//                         name: data.name
//                     };
//                     break;
//                 case 3:
//                     cache.third = cache.second;
//                     cache.second = cache.tail;
//                     cache.tail = {
//                         zip: data.zip,
//                         name: data.name
//                     };
//                     break;
//                 case 4:
//                     cache.head = cache.third;
//                     cache.third = cache.second;
//                     cache.second = cache.tail;
//                     cache.tail = {
//                         zip: data.zip,
//                         name: data.name
//                     };
//                     break;
//                 default:
//                     return;
//             }
//             localStorage.setItem('zipcode', city.zip);
//             localStorage.setItem('cache', JSON.stringify(cache));
//             // succ.data.zip = city.zip;
//             res.data.zip = city.zip;
//             // let a = setData(succ.data);
//             let a = dispatch({ type: 'SET_DATA', payload: res.data });
//             // let b = setCache(cache);
//             let b = dispatch({ type: 'SET_CACHE', payload: cache });
//             // DO I NEED RETURN??
//             return a && b;
//         })
//         .catch(err => {
//             // TODO: set up an error state
//             console.log(err);
//         });
// }