import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Navbar bg="primary " data-bs-theme="dark">
        <Container style={{padding: '10px 100px'}}>
            <Navbar.Brand href="#home">Blogs</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to='/' style={{color: 'black', textDecoration: 'none'}}>Home</Link></Nav.Link>
              <Nav.Link><Link to='/form' style={{color: 'black', textDecoration: 'none'}}>Add Blog</Link></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}