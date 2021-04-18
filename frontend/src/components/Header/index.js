import React, {useEffect} from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {isUserLoggedIn} from "../../actions/auth.actions";
import {useDispatch, useSelector} from "react-redux";

const Header = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector(state=> state.auth);

    useEffect(() => {
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }
    }, [auth.authenticate]);

    const signout = () => {
        localStorage.clear();
        window.location.href = "/";
        // dispatch(logout());
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Hello {auth.user.firstname}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Button variant="outline-danger" className="ml-2" onClick={signout}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;