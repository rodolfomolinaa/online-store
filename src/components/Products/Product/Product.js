import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';

function Product({ product, onChangeProduct }) {
    const [quantity, setQuantity] = useState(1);
    const [basePrice, setBasePrice] = useState(product.price);
    const [price, setPrice] = useState();
    // const [productData, setProductData] = useState();
    const [cart, setCart] = useLocalStorage('products', []);

    const addToCart = (product) => {
        console.log(product, 'added to cart');
        const newProduct = {
            id: product.id,
            quantity: quantity,
        }
        setCart([...cart, newProduct]);
    }

    // const onChange = () => {
    //     const newData = {
    //         ...product, name: 'prueba'
    //     }
    //     onChangeProduct(newData);
    // }

    useEffect(() => {
        // setProductData(product);
        setPrice((basePrice * quantity).toFixed(2));

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
                                    <Form.Control type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
                                </Col>
                                <Form.Label column xs={6} className="d-flex justify-content-end">
                                    ${price}
                                </Form.Label>
                                <Col xs={12}>
                                    {/* <Button variant="primary" className="mt-2" block onClick={onChange}> */}
                                    <Button variant="primary" className="mt-2" block onClick={() => addToCart(product)}>
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
