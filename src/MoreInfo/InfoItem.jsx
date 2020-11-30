import React from 'react';
import './InfoItem.css';

const InfoItem = (props) => {    
    const dateObj = new Date(props.time * 1000)    
    const hours = dateObj.getHours(); 
    const minutes = dateObj.getMinutes(); 
    const formattedTime = hours.toString().padStart(2, '0') + ':' +  
                minutes.toString().padStart(2, '0')
    
    return <div className='d-inline-block mb-2'>
                <div className='d-flex flex-column align-items-center infoItem'>
                    <span className='text-black-50'>{formattedTime}</span>
                    <img alt='weatherIcon' src={`http://openweathermap.org/img/wn/${props.weather}.png`} />
                    <span className='badge badge-warning mb-2'>{Math.round(props.temp)}°C</span>       
        </div>
    </div>
}

export default InfoItem;