export const handleTimeZone = (timeZone, type) => {
    // used to return string for DateTime component and int for handleBackground
    const tz = timeZone / 3600;
    const utcTimeZones = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Anchorage', 'Pacific/Honolulu'];
    switch (tz) {
        case -4:
            // EST
            if (type === 'background') {
                return 5
            } else {
                return utcTimeZones[0]
            }

        case -5:
            // CST
            if (type === 'background') {
                return 4
            } else {
                return utcTimeZones[1]
            }

        case -6:
            // GMT
            if (type === 'background') {
                return 5
            } else {
                return utcTimeZones[2]
            }

        case -7:
            // PST
            if (type === 'background') {
                return 6
            } else {
                return utcTimeZones[3]
            }

        case -8:
            //  AK
            if (type === 'background') {
                return 7
            } else {
                return utcTimeZones[4]
            }

        case -10:
            // HI
            if (type === 'background') {
                return 8
            } else {
                return utcTimeZones[5]
            }
        default:
            return utcTimeZones[0]
    }
};
