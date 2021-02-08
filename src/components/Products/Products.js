import Product from './Product/Product';
import { Row, CardGroup } from 'react-bootstrap';

function Products({ productsList, onChangeProduct }) {
    const handleProductChange = (product) => {
        const products = productsList.map(p => {
            if (p.id === product.id) {
                return product
            }
            return p;
        })
        onChangeProduct(products);
    }
    return (
        <Row className="mt-5">
            <CardGroup>
                {productsList.map((product, id) => (
                    <Product
                        key={product.id}
                        product={product}
                        onChangeProduct={handleProductChange}
                    />
                ))}
            </CardGroup>
        </Row>
    )
}

export default Products
