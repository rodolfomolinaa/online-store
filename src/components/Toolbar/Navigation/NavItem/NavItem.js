import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavItem(props) {
    return (
        <LinkContainer to={props.link} exact>
            <Nav.Link>{props.children}</Nav.Link>
        </LinkContainer>
    )
}

export default NavItem;
