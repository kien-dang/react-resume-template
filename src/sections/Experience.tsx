import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Section from '../components/Section'
import Timeline from '../components/Timeline'

export class Experience extends React.Component {
  render() {

    return (
      <Section id="experience" title="Experience">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              <Timeline time="2019 - Present" title="Web Designer" icon={["fas", "briefcase"]} left="-7px">
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfect.</p>
              </Timeline>

              <Timeline time="2017 - 2013" title="Front-End Developer" icon={["fas", "briefcase"]} left="-7px">
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
              </Timeline>

              <Timeline time="2013 - 2009" title="Back-End Developer" icon={["fas", "briefcase"]} left="-7px">
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
              </Timeline>

              <span className="line"></span>
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Experience