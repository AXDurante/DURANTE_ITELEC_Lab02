import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { countryFlag } from './countriesData.js';

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
                        {countryFlag.map((country) => (
                            <Language 
                                langObj={country}
                                key={country.name}
                            />
                        ))}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

function Language(props) {
    return (
        <Container>
            <NavDropdown.Item>
                <img 
                    class="pr-2 img-fluid" 
                    style={{ marginRight: '5px', width: '20px'}} 
                    src={props.langObj.flag} 
                    alt={props.langObj.alt} 
                />
                {props.langObj.name} 
            </NavDropdown.Item>
        </Container>
    )
}

export default Header;