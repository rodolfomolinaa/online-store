import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavItem from './Navigation/NavItem/NavItem';
import reactLogo from '../../assets/images/react.svg'
// import NavItems from '../Toolbar/Navigation/NavItems/NavItems';


function Toolbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    src={reactLogo}
                    width="30"
                    height="30"
                    alt="React logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem link="/">Dashboard</NavItem>
                    <NavItem link="/Products">Products</NavItem>
                    <NavItem link="/About">About</NavItem>
                    <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Toolbar
