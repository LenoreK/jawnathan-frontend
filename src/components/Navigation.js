import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Container} from 'react-bootstrap';

function Navigation() {
    return (
        <div className="navigation">
            <Navbar collaspeOnSelect bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="brand">Jawnathan Sebastian Sellers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-toggle" />
                    <Navbar.Collapse className="nav" id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%"}}>
                            <Nav.Link className="active" href="/">Home</Nav.Link>
                            <Nav.Link href="/Performances">Performances</Nav.Link>
                            <Nav.Link href="/Music">Music</Nav.Link>
                            <Nav.Link href="/Videos">Videos</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <Nav.Link href="/Shop">Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;