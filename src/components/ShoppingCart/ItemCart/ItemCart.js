import { Row, Col, Button, Image, InputGroup } from 'react-bootstrap';
import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa';

function Cart({ index, product, onChangeQuantity, onRemoveItem }) {
    return (
        <>
            <Row>
                <Col xl={2} className="align-self-center">
                    <Image
                        rounded
                        src={product.img}
                        style={{ width: '150px' }}
                    />
                </Col>
                <Col className="align-self-center" xl={7}>
                    <div>
                        <span className="font-weight-bold d-block">
                            {product.title}
                        </span>
                        {product.detail}
                    </div>
                </Col>
                <Col xl={3} className="align-self-center">
                    <Row>
                        <Col xl={7}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <Button
                                        variant="default"
                                        disabled={
                                            product.quantity === 1
                                                ? true
                                                : false
                                        }
                                        onClick={() =>
                                            onChangeQuantity('decrease', index)
                                        }
                                    >
                                        <FaMinus />
                                    </Button>
                                    <span
                                        className="mx-3"
                                        style={{
                                            display: 'flex',
                                            alignSelf: 'center',
                                        }}
                                    >
                                        {product.quantity}
                                    </span>
                                    <Button
                                        variant="default"
                                        onClick={() =>
                                            onChangeQuantity('increase', index)
                                        }
                                    >
                                        <FaPlus />
                                    </Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                        <Col xl={3}>
                            <Button
                                variant="danger"
                                onClick={() => onRemoveItem(index)}
                            >
                                <FaRegTrashAlt />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Cart;
