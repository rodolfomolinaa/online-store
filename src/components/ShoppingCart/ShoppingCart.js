import React from 'react'
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ShoppingCart() {
    const [myShoppingCart, setMyCart] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);

    const getProductsCart = () => {
        let myCart = JSON.parse(localStorage.getItem('cart'));
        if (myCart !== null) {
            return myCart;
        } else {
            setIsEmpty(true);
            console.log('no tienes items en tu carrito');
        }
    }

    const handlePrice = () => {
        console.log('change price');
    }

    useEffect(() => {
        const getDataFromCart = async () => {
            setIsEmpty(true);
            let itemsCart = await getProductsCart();
            if (itemsCart !== null) {
                setMyCart(itemsCart);
            }
            setIsEmpty(false);
        }
        getDataFromCart();
    }, [])

    return (
        <Row>
            <Col xl={8}>
                {
                    isEmpty ? (<div>No tienes productos en tu carrito</div>) :
                        myShoppingCart.map((product, id) => (
                            <Cart
                                key={product.id}
                                product={product}
                                onChangeQuantity={handlePrice}
                            />
                        ))
                }
            </Col>
            <Col xl={4}>
                <Checkout />
            </Col>
        </Row>
    )
}

export default ShoppingCart
