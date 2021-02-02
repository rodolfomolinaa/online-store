import React, { useState } from 'react';
import Sales from '../../components/Sales/Sales';
import { Row, Col } from 'react-bootstrap';

function Home() {
    const [productsList, setProductsList] = useState([
        {
            id: 1,
            img: "https://images-na.ssl-images-amazon.com/images/I/716hxkzc4SL._SY445_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$0.05"
        },
        {
            id: 2,
            img: "https://images-na.ssl-images-amazon.com/images/I/71RJjEn8oCL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 3,
            img: "https://images-na.ssl-images-amazon.com/images/I/51P7ctxJSvL._AC_SL1000_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$11"
        },
        {
            id: 4,
            img: "https://images-na.ssl-images-amazon.com/images/I/81WMUxNTRYL._SX342_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$110"
        },
        {
            id: 5,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 6,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 7,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 8,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
        {
            id: 9,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-JwILO-FL._AC_SL1500_.jpg",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
            title: "Lorem ipsum dolor sit amet",
            price: "$50"
        },
    ])
    return (

        <Row>
            <Col>
                <h1 className="text-center my-3">Productos disponibles</h1>
                <Sales sale={productsList} />
            </Col>
        </Row>
    )
}

export default Home
