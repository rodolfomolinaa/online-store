import React from 'react'
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { Row, Col } from 'react-bootstrap';

function ShoppingCart() {
    return (
        <Row>
            <Col xl={8}>
                <Cart />
            </Col>
            <Col xl={4}>
                <Checkout />
            </Col>
        </Row>
    )
}

export default ShoppingCart
