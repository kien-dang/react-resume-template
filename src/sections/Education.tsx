import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Section from '../components/Section'
import Timeline from '../components/Timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export class Education extends React.Component {
  render() {

    const element = <FontAwesomeIcon icon={faGraduationCap} style={{
      background: "#fff",
      color: "#ff4c60",
      position: "absolute",
      left: "-10px",
      top: 0,
      zIndex: 1,
      fontSize: "24px"
    }} />

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