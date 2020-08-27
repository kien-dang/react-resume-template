import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'

export class Education extends React.Component {
  render() {

    return (
      <Section id="education" title="Education">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              <Timeline time="2019 - Present" title="Academic Degree" icon={["fas", "graduation-cap"]}>
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
              </Timeline>

              <Timeline time="2017 - 2013" title="Bachelor's Degree" icon={["fas", "graduation-cap"]}>
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
              </Timeline>

              <Timeline time="2013 - 2009" title="Honours Degree" icon={["fas", "graduation-cap"]}>
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

export default Education