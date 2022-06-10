import axios from 'axios';


const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last/USD-BRL',
});

export default api;