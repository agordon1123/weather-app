import React from 'react';
import Search from './Search';
import RecentCache from './RecentCache';
import MetricsDetails from './MetricsDetails';
import MetricsOverview from './MetricsOverview';

// TODO: possibly incorporate fontawesome weather icons
const Metrics = props => {
    const { setData, data, setLocation, location, setCache, cache } = props;
    
    return (
        <div className='Metrics'>
            <div className='metrics-overview'>
                <MetricsOverview data={data} />
            </div>

            <div className='metrics-details-container'>
                <Search location={location} setLocation={setLocation} data={data} setData={setData} cache={cache} setCache={setCache} />
                <RecentCache cache={cache} setCache={setCache} data={data} setData={setData} />
                <MetricsDetails data={data} />
            </div>
        </div>
    )
}

export default Metrics;
