import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function EmptyCart() {
    return (
        <Jumbotron className="text-center">
            <IconContext.Provider
                value={{
                    size: '12em',
                    color: 'cornflowerblue',
                }}
            >
                <FaShoppingCart />
            </IconContext.Provider>
            <h1>Your cart is empty</h1>
            <p>Add something to make me happy</p>
            <p>
                <LinkContainer to="/" exact>
                    <Nav.Link>
                        <Button>Continue Shopping</Button>
                    </Nav.Link>
                </LinkContainer>
            </p>
        </Jumbotron>
    );
}

export default EmptyCart;
