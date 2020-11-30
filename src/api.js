const { default: Axios } = require("axios");

const instance = Axios.create({
    request: {
        withCredentials: true,
    },
    baseURL: 'https://api.openweathermap.org/data/2.5/',   
    params: {
        units: 'metric',
        appid: '000e2cf68861a3f1026427e9bf8a1b2d'
    }
});

export const weatherAPI = {
    getWeatherData(name) {
        return instance.get(`weather?q=${name}`)
    },    
    getHourlyWeather({ lat, lon }) {
        return instance.get(`onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily`)
    }
}