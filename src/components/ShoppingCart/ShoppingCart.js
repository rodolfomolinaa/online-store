import React from 'react'
import ItemCart from './ItemCart/ItemCart';
import Checkout from './Checkout/Checkout';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ShoppingCart() {
    const [myShoppingCart, setMyShoppingCart] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);

    const handlePrice = (action, productId) => {
        const productsUpdated = myShoppingCart.map(item => {
            if (item.id === productId) {
                const quantity = action === 'decrease' ? item.quantity - 1 : item.quantity + 1
                return {
                    ...item,
                    quantity: quantity,
                    price: item.basePrice * quantity
                }
            }
            return item;
        })
        setMyShoppingCart(productsUpdated);
        localStorage.setItem('cart', JSON.stringify(productsUpdated));
    }

    const removeItem = (productId) => {
        console.log('remove', productId);
        const myNewCart = myShoppingCart.filter(item => item.id !== productId);
        console.log('myNewCart', myNewCart);
        if (myNewCart.length > 0) {
            setIsEmpty(false);
            setMyShoppingCart(myNewCart);
            localStorage.setItem('cart', JSON.stringify(myNewCart));
        } else {
            setIsEmpty(true)
            localStorage.setItem('cart', JSON.stringify(myNewCart));
        }
    }

    useEffect(() => {
        const getDataFromCart = () => {
            const myCart = JSON.parse(localStorage.getItem('cart'));
            if (myCart !== null && myCart.length > 0) {
                setIsEmpty(false);
                setMyShoppingCart(myCart);
            } else {
                setIsEmpty(true);
            }
        }
        getDataFromCart();
    }, [])

    return (
        <Row>
            {
                isEmpty ? (
                    <Col xl={12}>
                        <div>No tienes productos en tu carrito</div>
                    </Col>
                ) : (
                        <>
                            <Col xl={8}>
                                {myShoppingCart.map((product, id) => (
                                    <ItemCart
                                        key={product.id}
                                        product={product}
                                        onChangeQuantity={handlePrice}
                                        onRemoveItem={removeItem}
                                    />
                                ))}
                            </Col>
                            <Col xl={4}>
                                <Checkout />
                            </Col>
                        </>
                    )
            }
        </Row>
    )
}

export default ShoppingCart
