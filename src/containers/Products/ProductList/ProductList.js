import Product from '../../../components/Products/Product/Product';
import { Row, CardGroup } from 'react-bootstrap';
import useLocalStorage from '../../../hooks/useLocalStorage';

function ProductList({ productsList }) {
    const [shoppingCart, setShoppingCart] = useLocalStorage('cart', []);

    const handleShoppingCart = (product, index) => {
        if (shoppingCart.length > 0) {
            //When product is in the cart
            let foundProduct = shoppingCart.find(
                (item) => item.id === product.id,
            );
            if (foundProduct) {
                const updateShopping = [...shoppingCart];
                updateShopping[index] = {
                    ...updateShopping[index],
                    quantity: updateShopping[index].quantity + product.quantity,
                };
                setShoppingCart(updateShopping);
            } else {
                //When product is not in cart
                setShoppingCart([...shoppingCart, product]);
            }
        } else {
            //When cart is empty
            setShoppingCart([product]);
        }
    };

    return (
        <Row className="mt-5">
            <CardGroup>
                {productsList.map((product, index) => (
                    <Product
                        key={product.id}
                        index={index}
                        product={product}
                        shoppingCart={handleShoppingCart}
                    />
                ))}
            </CardGroup>
        </Row>
    );
}

export default ProductList;
