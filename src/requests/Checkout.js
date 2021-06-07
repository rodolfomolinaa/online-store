import axios from 'axios';
import { config } from '../Constants';

export const save = async (products) => {
    const { data } = await axios.post(`${config.url.checkoutApi}/purchase`, {
        products,
    });
    return data;
};

export const getPurchase = async (id) => {
    let response = await axios.get(`${config.url.checkoutApi}/purchase/${id}`);
    return response;
};
