import Product from './Product/Product';
import { Row, CardGroup } from 'react-bootstrap';
import useLocalStorage from '../../hooks/useLocalStorage';


function Products({ productsList, onChangeProduct }) {
    // const handleProductChange = (product) => {
    //     const products = productsList.map(p => {
    //         if (p.id === product.id) {
    //             return product
    //         }
    //         return p;
    //     })
    //     onChangeProduct(products);
    // }
    const [cart, setCart] = useLocalStorage('cart', []);

    const handleShoppingCart = (product) => {
        const myCart = JSON.parse(localStorage.getItem('cart'));
        if (myCart !== null) {
            console.log('tiene algo');
            console.log('myCart', myCart);
        } else {
            console.log('esta vacio');
            console.log('myCart', myCart);
        }

        cart.find(p => {
            if (p.id === product.id) {
                p.quantity += product.quantity
                return console.log('ya existe');
            } else {
                return console.log('es nuevo')
            }
        })
        setCart(prev => [...prev, product]);
        console.log('add product to shopping car', product);

    }

    return (
        <Row className="mt-5">
            <CardGroup>
                {productsList.map((product, id) => (
                    <Product
                        key={product.id}
                        product={product}
                        // onChangeProduct={handleProductChange}
                        onAddToCart={handleShoppingCart}
                    />
                ))}
            </CardGroup>
        </Row>
    )
}

export default Products
