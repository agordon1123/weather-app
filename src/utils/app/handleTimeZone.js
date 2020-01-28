export const handleTimeZone = (timeZone, type) => {
    // used to return string for DateTime component and int for handleBackground
    const tz = timeZone / 3600;
    const utcTimeZones = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Anchorage', 'America/Honolulu'];
    switch (tz) {
        case -5:
            // EST
            if (type === 'background') {
                return 5
            } else if (type === 'datetime') {
                return utcTimeZones[0]
            }
        case -6:
            // CST
            if (type === 'background') {
                return 4
            } else if (type === 'datetime') {
                return utcTimeZones[1]
            }

        case -7:
            // GMT
            if (type === 'background') {
                return 5
            } else if (type === 'datetime') {
                return utcTimeZones[2]
            }

        case -8:
            // PST
            if (type === 'background') {
                return 6
            } else if (type === 'datetime') {
                return utcTimeZones[3]
            }

        case -9:
            //  AK
            if (type === 'background') {
                return 7
            } else if (type === 'datetime') {
                return utcTimeZones[4]
            }

        case -10:
            // HI
            if (type === 'background') {
                return 8
            } else if (type === 'datetime') {
                return utcTimeZones[5]
            }
        default:
            return utcTimeZones[0]
    }
};
