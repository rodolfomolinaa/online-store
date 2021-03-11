import { Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem/NavItem';
import reactLogo from '../../../assets/images/react.svg';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Header() {
    return (
        <Navbar
            className="fixed-top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            style={{ height: '5vh' }}
        >
            <Navbar.Brand>
                <img src={reactLogo} width="30" height="30" alt="React logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem link="/">Home</NavItem>
                </Nav>
                <Nav>
                    <NavItem link="/shopping-cart">
                        <IconContext.Provider
                            value={{
                                size: '2em',
                                color: 'cornflowerblue',
                            }}
                        >
                            <FaShoppingCart />
                        </IconContext.Provider>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
