import React from 'react'
import {Container} from 'react-bootstrap';
import{Nav} from 'react-bootstrap';
import{Navbar} from 'react-bootstrap';
import '../components/navbarDesign.css'
import { FcGlobe } from "react-icons/fc";
const NavbarDesign = () => {
  return (
    <>
    
    <Navbar className='navbar' bg="dark" variant="dark">
        <Container>
            <Navbar.Brand className='brand' href="#home">GifWorld <FcGlobe /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
        </Container>
    </Navbar>
   
    </>
  )
}

export default NavbarDesign