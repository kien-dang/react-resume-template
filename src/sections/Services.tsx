import React from 'react'
import Section from '../components/Section'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ServiceBox from '../components/ServiceBox'
import design from '../images/service-1.svg'
import development from '../images/service-2.svg'
import photograph from '../images/service-3.svg'

export class Services extends React.Component {
  render() {
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
      </Section>
    )
  }
}

export default Services