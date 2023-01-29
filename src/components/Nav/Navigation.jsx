import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Club-Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto pe-3">
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/clubs'>Clubs</Link>
            <Link className='nav-link' to='/events'>Events</Link>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className='nav-link text-dark' to='/login/studentlogin'>Student Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className='nav-link text-dark' to='/login/clublogin'>Club Login</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className='nav-link' to="/register">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation