import {Container, Navbar, Nav} from 'react-bootstrap';
import React from 'react'
import {Link} from 'react-router-dom'

const NavHeader = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top">
        <Container>
        <Navbar.Brand href="#home" className="nav_brand">Shalom</Navbar.Brand>
        <Navbar.Collapse>
        <Nav className="ms-auto">
            <ul className='navbar-nav px-4 px-md-0 text-secondary'>
            <li className="ms-md-4 pt-md-2">
            <Link to="/" className="nav-links">Home</Link>
            </li>
            <li className="ms-md-4 pt-md-2">
            <Link to="/" className="nav-links">About</Link>
            </li>
            <li className="ms-md-4 pt-md-2">
            <Link to="/" className="nav-links">FAQs</Link>
            </li>
            <li className="ms-md-5 ps-md-3 pt-md-2">
            <Link to="/login" className="nav-links">Login</Link>
            </li>
            <li className="ms-md-4 pt-md-2">
            <Link to="/register" className="text-secondary nav-links">Sign up</Link>
            </li>
            </ul>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavHeader
