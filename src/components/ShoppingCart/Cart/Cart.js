import { Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap';
import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa';

function Cart() {
    return (
        <>
            <Row className="my-3">
                <Col xl={1}>
                    <Image rounded src="https://i.imgur.com/QRwjbm5.jpg" />
                </Col>
                <Col xl={8}>
                    <span className="font-weight-bold d-block">Iphone 11 pro</span>
                    <span>
                        256GB, Navy Blue Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus atque nemo eligendi quasi nobis accusamus, ratione dignissimos amet reiciendis iste, molestias omnis ducimus quidem! Suscipit voluptate possimus in ad iste?
            </span>
                </Col>
                <Col xl={3} className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button variant="default">
                                <FaMinus />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl value="1" />
                        <Button variant="default">
                            <FaPlus />
                        </Button>
                        <span className="m-2 font-weight-bold">$900</span>
                        <Button variant="danger">
                            <FaRegTrashAlt />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            {/* <Row className="my-3">
                <Col xl={1}>
                    <Image rounded src="https://i.imgur.com/GQnIUfs.jpg" />
                </Col>
                <Col xl={8}>
                    <span className="font-weight-bold d-block">OnePlus 7T</span>
                    <span>
                        256GB, Navy Blue Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus atque nemo eligendi quasi nobis accusamus, ratione dignissimos amet reiciendis iste, molestias omnis ducimus quidem! Suscipit voluptate possimus in ad iste?
                            </span>
                </Col>
                <Col xl={3} className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button variant="default">
                                <FaMinus />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl value="1" />
                        <Button variant="default">
                            <FaPlus />
                        </Button>
                        <span className="m-2 font-weight-bold">$900</span>
                        <Button variant="danger">
                            <FaRegTrashAlt />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xl={1}>
                    <Image rounded src="https://i.imgur.com/o2fKskJ.jpg" />
                </Col>
                <Col xl={8}>
                    <span className="font-weight-bold d-block">Google Pixel XL</span>
                    <span>
                        256GB, Navy Blue Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus atque nemo eligendi quasi nobis accusamus, ratione dignissimos amet reiciendis iste, molestias omnis ducimus quidem! Suscipit voluptate possimus in ad iste?
                            </span>
                </Col>
                <Col xl={3} className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button variant="default">
                                <FaMinus />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl value="1" />
                        <Button variant="default">
                            <FaPlus />
                        </Button>
                        <span className="m-2 font-weight-bold">$900</span>
                        <Button variant="danger">
                            <FaRegTrashAlt />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="my-3">
                <Col xl={1}>
                    <Image rounded src="https://i.imgur.com/Tja5H1c.jpg" />
                </Col>
                <Col xl={8}>
                    <span className="font-weight-bold d-block">Samsung Galaxy Note 10</span>
                    <span>
                        256GB, Navy Blue Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus atque nemo eligendi quasi nobis accusamus, ratione dignissimos amet reiciendis iste, molestias omnis ducimus quidem! Suscipit voluptate possimus in ad iste?
                            </span>
                </Col>
                <Col xl={3} className="align-self-center">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Button variant="default">
                                <FaMinus />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl value="1" />
                        <Button variant="default">
                            <FaPlus />
                        </Button>
                        <span className="m-2 font-weight-bold">$900</span>
                        <Button variant="danger">
                            <FaRegTrashAlt />
                        </Button>
                    </InputGroup>
                </Col>
            </Row> */}
        </>


    )
}

export default Cart
