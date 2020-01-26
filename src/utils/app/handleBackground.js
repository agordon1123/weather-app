
export const handleBackground = weather => {
    // returns a status used to render background image
    weather = weather.toLowerCase();

    switch(weather) {
        case 'clear':
            return 'clear-day';
        case 'thunderstorm':
            return 'thunderstorm-night';
        case 'rain':
            return 'rain-day';
        case 'drizzle':
            return 'rain-day';
        case 'snow':
            return 'snow-night';
        case 'clouds':
            return 'clouds-day';
        default:
            return 'clear-day';
    }
}
