import Header from '../../components/Header/Header';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
    return (
        <>
            <Header />
            <Container fluid>
                {children}
            </Container>
        </>
    )
}

export default Layout
