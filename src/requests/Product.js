import axios from '../axios';
import { config } from '../Constants';

export const getProducts = async () => {
    try {
        let { data } = await axios.get(`${config.url.productsApi}/products`);
        data = data.products.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            stock: product.stock,
            quantity: 1,
            detail: product.detail,
            img: product.imageUrl,
        }));
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

export const getProduct = async (productId) => {
    try {
        let response = await axios.get(
            `${config.url.productsApi}/products/${productId}`,
        );
        const product = {
            id: response.data.product.id,
            title: response.data.product.title,
            price: response.data.product.price,
            stock: response.data.product.stock,
            detail: response.data.product.detail,
            img: response.data.product.imageUrl,
        };

        return product;
    } catch (error) {
        console.log(error);
    }
};
