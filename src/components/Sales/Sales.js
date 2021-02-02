import Product from './Product/Product';
import { Row, CardGroup } from 'react-bootstrap';

function Sales(props) {
    let saleProducts = props.sale.map((product, i) => (
        <Product
            key={product.id}
            product={product}
        />
    ))
    return (
        <Row>
            <CardGroup>
                {saleProducts}
            </CardGroup>
        </Row>
    )
}

export default Sales
