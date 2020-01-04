export const handleTimeZone = timeZone => {
        const tz = timeZone / 3600;
        const utcTimeZones = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Anchorage', 'America/Honolulu'];
        switch(tz) {
            case -5:
                // EST
                return utcTimeZones[0]
            case -6:
                // CST
                return utcTimeZones[1]
            case -7:
                // GMT
                return utcTimeZones[2]
            case -8:
                // PST
                return utcTimeZones[3]
            case -9:
                //  AK
                return utcTimeZones[4]
            case -10:
                // HI
                return utcTimeZones[5]
            default:
                return utcTimeZones[0]
        }
    };
