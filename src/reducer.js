import { weatherAPI } from "./api";

const DELETE_CARD = 'DELETE_CARD';
const SET_CARD_DATA = 'SET_CARD_DATA';
const GET_STORAGE_DATA = 'GET_STORAGE_DATA';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const UPDATE_CURRENT_WEATHER = 'UPDATE_CURRENT_WEATHER';
const TOGGLE_INFO_MODE = 'TOGGLE_INFO_MODE';

const initialState = {
  cities: [],
  cardData: [],
  storageData: JSON.parse(localStorage.getItem('cities')) || [],  
  isLoading: false,
  isInfoMode: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORAGE_DATA:       
      return {
        ...state,        
        cities: state.storageData              
      }
    
    case DELETE_CARD:        
      return {
        ...state,
        isInfoMode: false,
        cities: state.cities.filter(item => item.id !== action.id),
        storageData: localStorage.setItem('cities', JSON.stringify(state.cities.filter(item => item.id !== action.id))),
      }       
    case SET_CARD_DATA:   
      return {
        ...state,
        cardData: action.cardData,       
        cities: state.cities.find(item => item.name === action.cardData.name) ? [...state.cities] :
          [...state.cities, {
          name: action.cardData.name, id: action.cardData.id,
          currentTemp: action.cardData.currentTemp,
          icon: action.cardData.icon,
          country: action.cardData.country,
          hourlyData: action.cardData.hourlyData
        }],   
        storageData: localStorage.setItem('cities', JSON.stringify(state.cities.find(item => item.name === action.cardData.name) ? [...state.cities] : [...state.cities, action.cardData ])),
       }
    case UPDATE_CURRENT_WEATHER:      
      return {
        ...state,
        cities: state.cities.map(n => n.name === action.name ? {...n, currentTemp : action.temp, icon:action.icon} : n),
        storageData: localStorage.setItem('cities', JSON.stringify(state.cities.map(n => n.name === action.name? {...n, currentTemp: action.temp, icon:action.icon} : n)))
      }
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case TOGGLE_INFO_MODE: 
      return {
        ...state,
        isInfoMode: action.isInfoMode
    }
    default:
      return state;
  }
};

export const getStorageData = () => ({type: GET_STORAGE_DATA})

export const deleteCard = (id) => ({ type: DELETE_CARD, id });

export const addCard = (name, id, main, weather, sys, hourlyData) =>
  ({
    type: SET_CARD_DATA,
    cardData: {
      name, id,
      currentTemp: Math.round(main.temp),
      icon: weather[0].icon,
      country: sys.country,
      hourlyData
    }
  })

export const getCardInfo = (city) => async (dispatch) => {  
  const Response = await weatherAPI.getWeatherData(city);  
  dispatch(toggleIsLoading(true));
  const { name, id, main, weather, coord, sys } = Response.data;
  const requestHourly = await weatherAPI.getHourlyWeather(coord);
  const { hourly } = requestHourly.data
  const hourlyData = hourly.splice(24, 24);
  dispatch(addCard(name, id, main, weather, sys, hourlyData));    
  dispatch(toggleIsLoading(false))
}

export const updateCurrentWeather = (city) => async dispatch => {
  dispatch(toggleIsLoading(true));
  const Response = await weatherAPI.getWeatherData(city);
  const { name, main, weather } = Response.data;
  dispatch(setCurrentWeather(name, main, weather));
  dispatch(toggleIsLoading(false));
}

export const setCurrentWeather = (name, main, weather) =>
  ({
    type: UPDATE_CURRENT_WEATHER, name,
    temp: Math.round(main.temp),
    icon: weather[0].icon
  })

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const toggleInfoMode = (isInfoMode) => ({ type: TOGGLE_INFO_MODE, isInfoMode })

export default reducer;