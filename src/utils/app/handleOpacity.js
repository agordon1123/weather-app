import { handleTimeZone } from './handleTimeZone';

export const handleOpacity = timezone => {
    // returns a decimal to set opacity bsaed on time of day
    let tz = handleTimeZone(timezone, 'background');
    tz = tz * 60 * 60;
    const unix = Date.now() - tz
    const time = new Date(unix);
    const hours = time.getHours();

    if (2 >= hours && hours < 3) {
        return .2
    } else if (4 >= hours && hours < 5) {
        return .2
    } else if (6 >= hours && hours < 7) {
        return .4
    } else if (8 >= hours && hours < 9) {
        return .6
    } else if (10 >= hours && hours < 11) {
        return .8
    } else if (12 >= hours && hours < 13) {
        return .1
    } else if (14 >= hours && hours < 15) {
        return .8
    } else if (16 >= hours && hours < 17) {
        return .6
    } else if (18 >= hours && hours < 19) {
        return .4
    } else if (20 >= hours && hours < 21) {
        return .2
    } else if (23 >= hours) {
        return .2
    }
}