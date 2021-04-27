import axios from 'axios';

export const save = async (products) => {
    const { data } = await axios.post('http://localhost:8080/purchase/', {
        products,
    });
    return data;
};

export const getPurchase = async (id) => {
    let response = await axios.get(`http://localhost:8080/purchase/${id}`);
    return response;
};
