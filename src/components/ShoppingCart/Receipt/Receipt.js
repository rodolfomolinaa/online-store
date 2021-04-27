import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getPurchase } from '../../../requests/Checkout';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Receipt() {
    const params = useParams();
    const [purchase, setPurchase] = useState();

    useEffect(() => {
        async function getPurchaseById() {
            const { data } = await getPurchase(params.purchaseId);
            setPurchase(data);
        }
        getPurchaseById();
    }, [params.purchaseId]);

    let content = (
        <div>Purchase with order number {params.purchaseId} NOT FOUND</div>
    );
    if (purchase) {
        content = (
            <>
                <h1>Thanks for your purchase!</h1>
                <p>Your order number is {purchase.orderNumber} </p>
                <LinkContainer to="/" exact>
                    <Nav.Link>
                        <Button>Continue Shopping</Button>
                    </Nav.Link>
                </LinkContainer>
            </>
        );
    }
    return (
        <>
            <Row className="p-3 mt-5 justify-content-center">
                <Col xl={12}>{content}</Col>
            </Row>
        </>
    );
}

export default Receipt;
