import React from 'react'
import Header from '../sections/Header'
import Home from '../sections/Home'
import Footer from '../sections/Footer'
import About from '../sections/About'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Services from '../sections/Services'
import '../components/Icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Container>
          <Row>
            <Col md={6}>
              <Education />
            </Col>
            <Col md={6}>
              <Experience />
            </Col>
          </Row>
        </Container>
        <Services />
      </main>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Footer />
    </>
  );
}

export default App
