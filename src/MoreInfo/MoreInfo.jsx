import React from 'react';
import InfoItem from './InfoItem';

const MoreInfo = (props) => {   
    return props.hourlyData.map(t => <InfoItem key={t.dt + t.temp} time={t.dt} temp={t.temp} weather={t.weather[0].icon} />)
}

export default MoreInfo;