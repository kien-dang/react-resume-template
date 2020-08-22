import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo.svg'

export class Header extends React.Component {
  render() {
    return (
      <header className="kd-header fixed-top">
        <Container>
          <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#">
              <img src={logo} alt="Kien Dang" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="ml-auto" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#experience">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header