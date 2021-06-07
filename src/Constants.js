const prod = {
    url: {
        productsApi: 'https://online-store-312700.wn.r.appspot.com/api',
        checkoutApi:
            'https://checkout-dot-online-store-312700.wn.r.appspot.com',
    },
};

const dev = {
    url: {
        productsApi: 'http://localhost:5000/api',
        checkoutApi: 'http://localhost:8080/',
    },
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
