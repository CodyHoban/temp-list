import axios from 'axios'

const API_KEY = '26a62a8c2fc4e8c248b650c2163e954d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;
// http://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=${API_KEY}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}${city}&appid=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}