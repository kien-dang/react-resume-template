import React from 'react'
import { Section } from '../components'
import { Row, Col, Button, Form } from 'react-bootstrap'

export class Contact extends React.Component {
  render () {
    return (
      <Section id="contact" title="Get In Touch">
        <Row>
          <Col md={4}>
            <div className="contact-info">
              <h3>Let's talk about everything!</h3>
              <p>
                Send me an <a href="mailto:jobs@kiendang.com">email</a>.
                <span role="img" aria-label="wave">👋</span>
              </p>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="inputName">
                  <Form.Control type="text" className="kd-form-control" placeholder="Your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="inputEmail">
                  <Form.Control type="email" className="kd-form-control" placeholder="Email address" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="inputSubject">
                  <Form.Control type="text" className="kd-form-control" placeholder="Subject" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="inputMessage">
                  <Form.Control as="textarea" rows={5} className="kd-form-control" placeholder="Message" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button variant="kd">Send Message</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Contact
