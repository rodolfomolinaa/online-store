import { Row, Col, Button, Image, InputGroup } from 'react-bootstrap';
import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa';

function Cart({ index, product, onChangeQuantity, onRemoveItem }) {
    return (
        <>
            <Row className="my-3">
                <Col xl={1}>
                    <Image rounded src={product.img} />
                </Col>
                <Col xl={8}>
                    <span className="font-weight-bold d-block">
                        {product.name}
                    </span>
                    <span className="align-self-center">{product.detail}</span>
                </Col>
                <Col xl={3} className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button
                                variant="default"
                                disabled={product.quantity === 1 ? true : false}
                                onClick={() =>
                                    onChangeQuantity('decrease', index)
                                }
                            >
                                <FaMinus />
                            </Button>
                        </InputGroup.Prepend>

                        <span className="m-2">{product.quantity}</span>
                        <Button
                            variant="default"
                            onClick={() => onChangeQuantity('increase', index)}
                        >
                            <FaPlus />
                        </Button>
                        <span className="m-2 font-weight-bold">
                            ${product.quantity * product.price}
                        </span>
                        <Button
                            variant="danger"
                            onClick={() => onRemoveItem(index)}
                        >
                            <FaRegTrashAlt />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </>
    );
}

export default Cart;
