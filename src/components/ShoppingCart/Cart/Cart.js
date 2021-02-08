import { Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap';
import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa';

function Cart({ product, onChangeQuantity }) {
    const changePrice = () => {
        console.log('change price in cart');
    }

    return (
        <>
            <Row className="my-3">
                <Col xl={1}>
                    <Image rounded src={product.img} />
                </Col>
                <Col xl={8}>
                    <span className="font-weight-bold d-block">{product.name}</span>
                    <span className="align-self-center">
                        {product.detail}
                    </span>
                </Col>
                <Col xl={3} className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button
                                variant="default"
                                onClick={changePrice}
                            >
                                <FaMinus />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl value={product.quantity} onChange={e => e.target.value} />
                        <Button
                            variant="default"
                            onClick={changePrice}
                        >
                            <FaPlus />
                        </Button>
                        <span className="m-2 font-weight-bold">${product.price}</span>
                        <Button variant="danger">
                            <FaRegTrashAlt />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </>


    )
}

export default Cart
