/* eslint-disable */
import axios from 'axios'; 
const BASE_URL = 'https://emplug-api.herokuapp.com/api/v1';


const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
 /* eslint-enable */
