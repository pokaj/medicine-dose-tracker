import React from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from "react-bootstrap";

const Header = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button variant="outline-danger" className="ml-2">Logout</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;