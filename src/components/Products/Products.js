import Product from './Product/Product';
import { Row, CardGroup } from 'react-bootstrap';
import useLocalStorage from '../../hooks/useLocalStorage';
// import testLocalStorage from '../../hooks/testLocalStorage';
// import { useState, useEffect } from 'react';


function Products({ productsList }) {
    const [shoppingCart, setShoppingCart] = useLocalStorage('cart', []);
    // const [shoppingCart, setShoppingCart] = useState([]);

    const handleShoppingCart = (product) => {
        if (shoppingCart.length > 0) {
            let foundProduct = shoppingCart.find(item => item.id === product.id);
            if (foundProduct) {
                const quantity = foundProduct.quantity += product.quantity;
                foundProduct = {
                    ...foundProduct,
                    quantity: quantity,
                    price: foundProduct.basePrice * quantity

                }
                console.log('found')
                console.log('update', foundProduct);
                console.log(setShoppingCart([...shoppingCart, foundProduct]));

            } else {
                console.log('not found');
                setShoppingCart([...shoppingCart, product]);
            }

        } else {
            console.log('carro no tiene items')
            setShoppingCart([product]);
        }

    }
    return (
        <Row className="mt-5">
            <CardGroup>
                {productsList.map((product, id) => (
                    <Product
                        key={product.id}
                        product={product}
                        shoppingCart={handleShoppingCart}
                    />
                ))}
            </CardGroup>
        </Row>
    )
}

export default Products
