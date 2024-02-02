import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#000000" }} data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="tropikallogo.png"
                    width="80"
                    height="35"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/"> See and Do </Nav.Link>
                    <Nav.Link href="/"> Where to Go </Nav.Link>
                    <Nav.Link href="/"> Events and Festivals </Nav.Link>
                    <Nav.Link href="/"> 7641 Islands </Nav.Link>
                    <Nav.Link href="/" style={{ color: '#afc900' }}> Save Our Spots </Nav.Link>
                    {/* Move the NavDropdown inside the Nav */}
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="EN"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item>LANG1</NavDropdown.Item>
                        <NavDropdown.Item>LANG2</NavDropdown.Item>
                        <NavDropdown.Item>LANG3</NavDropdown.Item>
                        <NavDropdown.Item>LANG4</NavDropdown.Item>
                        <NavDropdown.Item>LANG5</NavDropdown.Item>
                        <NavDropdown.Item>LANG6</NavDropdown.Item>
                        <NavDropdown.Item>LANG7</NavDropdown.Item>
                        <NavDropdown.Item>LANG8</NavDropdown.Item>
                        <NavDropdown.Item>LANG9</NavDropdown.Item>
                        <NavDropdown.Item>LANG10</NavDropdown.Item>
                        <NavDropdown.Item>LANG11</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;