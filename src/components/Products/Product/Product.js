import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Product({ product, shoppingCart }) {
    const [quantity, setQuantity] = useState(1);
    const [basePrice] = useState(product.price);
    const [newPrice, setNewPrice] = useState();

    const addToShoppingCart = () => {
        const newProduct = {
            ...product,
            price: newPrice,
            basePrice: basePrice,
            quantity: quantity,
        }
        shoppingCart(newProduct);
    }

    useEffect(() => {
        setNewPrice(Math.round(basePrice * quantity));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity])



    return (
        <Col xs={12} sm={8} md={6} lg={4} xl={2} className="d-flex align-items-stretch">
            {product ? (
                <Card className="mb-4">
                    <Link to={`/product/${product.id}`}>
                        <Card.Img variant="top" src={product.img} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Form>
                            <Form.Group as={Row}>
                                <Col xs={6}>
                                    <Form.Control type="number" min="1" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                                </Col>
                                <Form.Label column xs={6} className="d-flex justify-content-end">
                                    ${newPrice}
                                </Form.Label>
                                <Col xs={12}>
                                    <Button variant="primary" className="mt-2" block onClick={addToShoppingCart}>
                                        Add to cart
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Footer>
                </Card>
            ) : (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" size="xl" />
                        <div>Loading...</div>
                    </div>
                )}
        </Col>
    )
}

export default Product;
