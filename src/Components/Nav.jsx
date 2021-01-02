import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './../Styles/Nav.css';

class Navigation extends React.Component {
    
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" id="navbar">
                <Navbar.Brand href="#home" id="brand-color">WSU - CSClub Rental</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Rentals</Nav.Link>
                        <Nav.Link href="about us">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#settings">Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;