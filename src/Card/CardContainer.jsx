import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import { deleteCard, updateCurrentWeather} from '../reducer';
import Card from './Card';

const CardContainer = ({isLoading, cities, cardData, deleteCard, showMoreInfo, updateCurrentWeather}) => {
    
    return isLoading ? <Loader /> : cities.map((c, index) =>
        <Card key={index}
            id={c.id}
            name={c.name}
            currentTemp={c.currentTemp}
            icon={c.icon}
            hourlyData={c.hourlyData}
            country={c.country}
            isLoading={isLoading}
            cardData={cardData}
            deleteCard={deleteCard}
            showMoreInfo={showMoreInfo}
            updateCurrentWeather={updateCurrentWeather}
            />)      
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,        
        cardData: state.cardData,
        isLoading: state.isLoading,
    }
}

export default connect(mapStateToProps, {deleteCard, updateCurrentWeather})(CardContainer);