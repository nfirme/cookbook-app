import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/chef.svg'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                    />
                    cookbook.io
                </Navbar.Brand>
                <Nav.Item>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav.Item>
        </Navbar>
    )
}

export default NavBar;
