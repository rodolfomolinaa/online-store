import React from 'react';
import ItemCart from '../../components/ShoppingCart/ItemCart/ItemCart';
import Checkout from '../../components/ShoppingCart/Checkout/Checkout';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

function ShoppingCart() {
    const [myShoppingCart, setMyShoopingCart] = useLocalStorage('cart');
    const [isEmpty, setIsEmpty] = useState(true);

    const handlePrice = (action, index) => {
        const updateShoppingCart = [...myShoppingCart];
        const quantity =
            action === 'decrease'
                ? updateShoppingCart[index].quantity - 1
                : updateShoppingCart[index].quantity + 1;

        updateShoppingCart[index] = {
            ...updateShoppingCart[index],
            quantity: quantity,
        };
        setMyShoopingCart(updateShoppingCart);
    };

    const removeItem = (index) => {
        const updateShoppingCart = [...myShoppingCart];
        updateShoppingCart.splice(index, 1);
        setMyShoopingCart(updateShoppingCart);
        myShoppingCart.length > 0 ? setIsEmpty(false) : setIsEmpty(false);
    };

    useEffect(() => {
        myShoppingCart.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
    }, [myShoppingCart]);

    return (
        <Row style={{ paddingTop: '50px' }}>
            {isEmpty ? (
                <Col xl={12}>
                    <div>No tienes productos en tu carrito</div>
                </Col>
            ) : (
                <>
                    <Col xl={8}>
                        {myShoppingCart.map((product, index) => (
                            <ItemCart
                                key={product.id}
                                index={index}
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
            )}
        </Row>
    );
}

export default ShoppingCart;
