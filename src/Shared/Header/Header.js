import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='py-2'>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="light" variant="">
      <Container>
        <Navbar.Brand className='nav-links'><Link><h3><span className='fw-bold text-success'>Edu</span>Hash</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto text-dark nav-links fs-5 fw-semibold">
            <Link className='me-5' to="/">Home</Link>
            <Link className='me-5' to="/course/:id" >Courses</Link>
            <Link className='me-5' to="" >Blog</Link>
            <Link className='me-5' to="/faq" >FAQ</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;