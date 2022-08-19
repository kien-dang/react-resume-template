import React from 'react'
import { Section, ServiceBox } from '../components'
import { Row, Col } from 'react-bootstrap'
import ServiceConfig from '../data/services.json'
import Pulse from 'react-reveal/Pulse'

const services = ServiceConfig.services

export class Services extends React.Component {
  render() {
    return(
      <Section id="services" title="Services">
        <Row>
          { services.map(s => (
            <Col md={4} key={s.title}>
              <Pulse delay={s.delay}>
                <ServiceBox title={s.title} image={s.photo} backgroundColor={s.backgroundColor}>
                  <div className="mb-0" dangerouslySetInnerHTML={ { __html: s.content } } />
                </ServiceBox>
              </Pulse>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12}>
            <div className="mt-3 text-center">
              <div className="mb-0" dangerouslySetInnerHTML={ { __html: ServiceConfig.customContent } } />
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Services
