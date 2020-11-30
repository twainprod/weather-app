import React from 'react';
import Loader from '../Loader/Loader';
import './Card.css';

const Card = (props) => {     
    
    return (
        <div className='d-inline-block vertical-align-top mx-2 cardItem'>
            <div className="card mb-2">
                <div className='card-header d-flex justify-content-between align-items-center'>
                    <div>{props.name}
                        <span className='text-muted'> / {props.country}</span>
                    </div>
                    <div>
                        <button className='btn p-1' onClick={() => props.updateCurrentWeather(props.name)}>
                            <i className="fas fa-sync-alt"></i></button>
                        <button className='btn p-1' onClick={() => props.deleteCard(props.id)}>
                            <i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    {props.icon ? <img alt='weatherIcon' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} /> : <Loader />}
                    <h5 className="card-title">{props.currentTemp} °C</h5>                
                    <div className='btn-group'>
                        <button className='btn btn-warning btn-sm'
                            onClick={() => props.showMoreInfo(props.hourlyData, props.name)}>View more...</button>
                    </div>
                </div>
            </div>
        </div>);
} 

export default Card;