import Header from './Header/Header';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
    return (
        <>
            <Container fluid>
                <Header />
                {children}
            </Container>
        </>
    );
}

export default Layout;
