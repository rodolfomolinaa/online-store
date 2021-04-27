import React from 'react';
import ItemCart from '../../components/ShoppingCart/ItemCart/ItemCart';
import Checkout from '../../components/ShoppingCart/Checkout/Checkout';
import EmptyCart from '../../components/ShoppingCart/EmptyCart/EmptyCart';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { save } from '../../requests/Checkout';

function ShoppingCart(props) {
    const [myShoppingCart, setMyShoopingCart] = useLocalStorage('cart');
    const [isEmpty, setIsEmpty] = useState(true);
    const history = useHistory();

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

    const handlePurchase = async () => {
        let products = myShoppingCart.map((product) => ({
            id: product.id,
            quantity: product.quantity,
        }));
        const data = await save(products);
        if (data) {
            setMyShoopingCart([]);
        }
        history.push(`/purchase/${data.id}`);
    };

    useEffect(() => {
        myShoppingCart.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
    }, [myShoppingCart]);

    let content = (
        <Col xl={12}>
            <EmptyCart />
        </Col>
    );
    if (!isEmpty)
        content = (
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
                    <Checkout purchase={handlePurchase} />
                </Col>
            </>
        );

    return <Row style={{ paddingTop: '50px' }}>{content}</Row>;
}

export default ShoppingCart;
