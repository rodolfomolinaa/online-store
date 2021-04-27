import React from 'react';
import classes from './NotFound.module.css';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NotFound() {
    return (
        // <div id="notfound">
        <div id={classes.notfound}>
            <div className={classes.notfound}>
                <div className={classes.notfound404}>
                    <h1>
                        4<span>0</span>4
                    </h1>
                </div>
                <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                </p>
                {/* <a href="#">home page</a> */}
                <LinkContainer to="/" exact>
                    <Nav.Link>Home page</Nav.Link>
                </LinkContainer>
            </div>
        </div>
    );
}

export default NotFound;
