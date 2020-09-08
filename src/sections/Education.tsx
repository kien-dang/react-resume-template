import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'

export class Education extends React.Component {
  render () {

    return (
      <Section id="education" title="Education">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              <Timeline time="2017 – 2018" title="Queensland University of Technology" icon={['fas', 'graduation-cap']}>
                <p>Master of Information Technology (Data Science)</p>
              </Timeline>

              <Timeline time="2014 – 2015" title="Arena Multimedia" icon={['fas', 'graduation-cap']}>
                <p>Certificate in Multimedia (Graphics, Web Design &amp; Development certificate)</p>
              </Timeline>

              <Timeline time="2009 – 2011" title="The University of Greenwich" icon={['fas', 'graduation-cap']}>
                <p>Bachelor of Science Computing (Computer Science)</p>
              </Timeline>

              <Timeline time="2007 – 2009" title="Aptech Computer Education" icon={['fas', 'graduation-cap']}>
                <p>Higher Diploma in Software Engineering</p>
              </Timeline>

              <Timeline time="2006 – 2007" title="Aptech Computer Education" icon={['fas', 'graduation-cap']}>
                <p>Diploma in Information System Management</p>
                <p>&nbsp;</p>
              </Timeline>

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Education
