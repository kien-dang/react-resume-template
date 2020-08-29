import React from 'react'
import { Section, ServiceBox } from '../components'
import { Row, Col } from 'react-bootstrap'
import design from '../images/service-1.svg'
import development from '../images/service-2.svg'
import photograph from '../images/service-3.svg'

export class Services extends React.Component {
  render () {
    return (
      <Section id="services" title="Services">
        <Row>
          <Col md={4}>
            <ServiceBox title="UI/UX design" image={design} backgroundColor="rgb(108, 108, 229)">
              <p className="mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
            </ServiceBox>
          </Col>
          <Col md={4}>
            <ServiceBox title="Web Development" image={development} backgroundColor="rgb(249, 215, 76)">
              <p className="mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
            </ServiceBox>
          </Col>
          <Col md={4}>
            <ServiceBox title="Photography" image={photograph} backgroundColor="rgb(249, 123, 139)">
              <p className="mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.</p>
            </ServiceBox>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="mt-3 text-center">
              <p className="mb-0">Looking for a custom job? <a href="#contact">Click here</a> to contact me! <span role="img" aria-label="wave">👋</span></p>
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Services
