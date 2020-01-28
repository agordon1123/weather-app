import { handleTimeZone } from './handleTimeZone';

export const handleBackground = (weather, sunrise, sunset, timezone) => {
    // returns a status used to render background image
    weather = weather.toLowerCase();

    let tz = handleTimeZone(timezone, 'background');
    tz = tz * 60 * 60;
    const unix = Date.now() / 1000 - tz;

    const tzSunrise = sunrise - tz;
    const tzSunset = sunset - tz;

    switch(weather) {
        case 'clear':
            if (tzSunrise < unix && unix < tzSunset) {
                return 'clear-day';
            } else {
                return 'clear-night';
            }
        case 'thunderstorm':
            if (tzSunrise < unix && unix < tzSunset) {
                return 'thunderstorm-day';
            } else {
                return 'thunderstorm-night';
            }
        case 'rain':
            if (tzSunrise < unix && unix < tzSunset) {
                return 'rain-day';
            } else {
                return 'rain-night';
            }
        case 'drizzle':
            if (tzSunrise < unix && unix < tzSunset) {
                return 'rain-day';
            } else {
                return 'rain-night';
            }
        case 'snow':
            if (tzSunrise < unix && unix < tzSunset) {
                return 'snow-day';
            } else {
                return 'snow-night';
            }
        case 'clouds':
            if (tzSunrise < unix && unix < tzSunset) {
                return 'clouds-day';
            } else {
                return 'clouds-night';
            }
        default:
            return 'clear-day';
    }
}
