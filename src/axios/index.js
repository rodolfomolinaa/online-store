import axios from 'axios';
import { config } from '../Constants';

const instance = axios.create({
    // baseURL: process.env.REACT_APP_DEVELOPMENT,
    baseURL: config.url.productsApi,
});

export default instance;
