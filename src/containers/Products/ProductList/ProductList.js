import Product from '../../../components/Products/Product/Product';
import { Row, CardGroup } from 'react-bootstrap';
import useLocalStorage from '../../../hooks/useLocalStorage';

function ProductList({ productsList }) {
    const [shoppingCart, setShoppingCart] = useLocalStorage('cart', []);

    const handleShoppingCart = (product) => {
        if (shoppingCart.length > 0) {
            //When product is in the cart
            let foundProduct = shoppingCart.find(item => item.id === product.id);
            if (foundProduct) {
                const newProducts = shoppingCart.map(item => {
                    if (item.id === product.id) {
                        item.quantity += product.quantity;
                        item.price = item.basePrice * item.quantity;
                    }
                    return item;
                })
                setShoppingCart([...newProducts]);
            } else {
                //When product is not in cart
                setShoppingCart([...shoppingCart, product])
            }
        } else {
            //When cart is empty
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

export default ProductList;
