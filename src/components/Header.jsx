import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <Navbar  collapseOnSelect expand="lg" className="bg-black py-2 position-fixed" style={{zIndex:1,width:"100%"}}>
      <Container fluid>
        <Navbar.Brand >
            <Link to={'/'}>
            <img
              src={logoImg}
              width="200"
              height="80"
              className="d-inline-block align-top ms-5"
              alt="logo"
              
            />
            </Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"className='bg-warning ' />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto d-flex justify-content-evenly align-items-center" style={{width:"100%"}}>
            <Link className='text-warning ' to={'/company'} style={{textDecoration:"none",fontSize:"1.6rem"}}>Company</Link>
            <Link className='text-warning' to={'/gallery'} style={{textDecoration:"none",fontSize:"1.6rem"}}>Gallery</Link>
            <Link className='text-warning ' to={'/services'} style={{textDecoration:"none",fontSize:"1.6rem"}}>Services</Link>
            <Link className='text-warning ' to={'/contact'} style={{textDecoration:"none",fontSize:"1.6rem"}}>Contact</Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header