import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function Product({ index, product, shoppingCart }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const [total, setTotal] = useState(product.price);

    const addToShoppingCart = () => {
        const newProduct = {
            ...product,
            quantity: quantity,
        };
        shoppingCart(newProduct, index);
    };

    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
        setTotal(e.target.value * product.price);
    };

    return (
        <Col
            xs={12}
            sm={8}
            md={6}
            lg={4}
            xl={2}
            className="d-flex align-items-stretch"
        >
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
                                <Form.Control
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => handleQuantity(e)}
                                />
                            </Col>
                            <Form.Label
                                column
                                xs={6}
                                className="d-flex justify-content-end"
                            >
                                ${total.toFixed(2)}
                            </Form.Label>
                            <Col xs={12}>
                                <Button
                                    variant="primary"
                                    className="mt-2"
                                    block
                                    onClick={addToShoppingCart}
                                >
                                    Add to cart
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Product;
