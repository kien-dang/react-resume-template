import React from 'react'
import { Scroller } from '../components'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../images/logo.svg'

export class Header extends React.Component {
  render () {
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
                  <Scroller href="#home" className="nav-link">Home</Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#about" className="nav-link">About</Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#education" className="nav-link">Education</Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#experience" className="nav-link">Experience</Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#recommendations" className="nav-link">Recommendations</Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#contact" className="nav-link">Contact</Scroller>
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
