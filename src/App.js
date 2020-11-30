import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search/Search';
import CardContainer from './Card/CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getStorageData, toggleInfoMode } from './reducer';
import MoreInfo from './MoreInfo/MoreInfo';


const App = () => { 
  const isInfoMode = useSelector(state => state.isInfoMode)
  
  const [hourlyData, setHourlyData] = useState([]);   
  const [name, setName] = useState('');  

  const dispatch = useDispatch();  

  useEffect(() => {
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    return () => {
    window.removeEventListener('unhandledrejection', () => {})
  }
  }, [])
  
  useEffect(() => {
    dispatch(getStorageData())
  }, [])  

  const catchAllUnhandledErrors = (PromiseRejectionEvent) => {
    alert("Incorrect city name! Please, check the entered data.");
  };

  const showMoreInfo = (hourlyData, name) => {    
    dispatch(toggleInfoMode(true))
    setName(name);
    setHourlyData(hourlyData)
  }  

  const hideMoreInfo = () => {
    dispatch(toggleInfoMode(false))
  }
  
  return (
    <div className="container">
      <div className='display-3 text-center mt-4'>WeatherApp on <span className='font-weight-bold'>ReactJS</span></div>      
      <Search />      
      <div className='cardsBlock'><CardContainer showMoreInfo={showMoreInfo} /></div>  
      {isInfoMode && <>
        <div className='display-4 text-center my-4'>
          <button className='btn btn-lg' onClick={hideMoreInfo}>
            <i className="fas fa-chevron-up"></i></button>Hourly Forecast for
            <span className='font-weight-bold'> {name}</span>:
            </div>
        <div className='infoBlock mb-3'>
          <MoreInfo hourlyData={hourlyData} /></div>
      </>}
      </div>
    );
}
  
export default App;
