import { Link } from 'react-router-dom'
import { Col, Card, Button } from 'react-bootstrap';


function Product({ product }) {
    console.log('product in product', product);
    return (
        <Col xs={12} sm={8} md={6} lg={4} xl={2} className="d-flex align-items-stretch">
            <Card className="mb-4">
                <Card.Body>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>
                        {product.price}
                        <Link to={`/product/${product.id}`}>
                            <Button variant="primary" className="float-right">Comprar</Button>
                        </Link>
                    </Card.Text>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Product
