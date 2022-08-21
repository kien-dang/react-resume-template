import React from 'react'
import { Section } from '../components'
import { Row, Col, Button, Form } from 'react-bootstrap'
import contact from '../data/contact.json'

export class Contact extends React.Component {
  render() {
    return (
      <Section id="contact" title="Get In Touch">
        <Row>
          <Col md={4}>
            <div className="contact-info">
              <h3>{contact.title}</h3>
              <div dangerouslySetInnerHTML={ { __html: contact.subTitle } } />
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="inputName">
                  <Form.Control type="text" className="kd-form-control" placeholder="Your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-4" controlId="inputEmail">
                  <Form.Control type="email" className="kd-form-control" placeholder="Email address" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-4" controlId="inputSubject">
                  <Form.Control type="text" className="kd-form-control" placeholder="Subject" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-4" controlId="inputMessage">
                  <Form.Control as="textarea" className="kd-form-control" placeholder="Message" style={{ height: '150px' }} />
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
