import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import classes from './Product.module.css';

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
        <Col xs={12} sm={8} md={6} lg={4} xl={2} className="mt-3">
            <Card className={classes.ProductCard}>
                <Link
                    to={`/product/${product.id}`}
                    className={classes.ProductTumb}
                >
                    <Card.Img variant="top" src={product.img} />
                </Link>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <hr />
                    <Row>
                        <Col>
                            <Form.Control
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => handleQuantity(e)}
                            />
                        </Col>
                        <Col>
                            <Form.Label
                                column
                                className="d-flex justify-content-end"
                            >
                                ${total.toFixed(2)}
                            </Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                variant="primary"
                                className="mt-2"
                                block
                                onClick={addToShoppingCart}
                            >
                                Add to cart
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Product;
