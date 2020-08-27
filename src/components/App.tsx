import React from 'react'
import { Header, Home, Footer, About, Education, Experience, Services, Review } from '../sections'
import { Row, Col, Container } from 'react-bootstrap'

import '../components/Icons'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <Review />
      </main>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Footer />
    </>
  );
}

export default App
