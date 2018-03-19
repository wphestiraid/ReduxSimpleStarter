import axios from 'axios';

const API_KEY = '407ced4aac717eb32736b8da7c3fd71f';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},kr`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER'
        payload: request
    };
}
