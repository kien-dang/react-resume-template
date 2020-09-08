import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'

export class Experience extends React.Component {
  render () {

    return (
      <Section id="experience" title="Experience">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              <Timeline time="2020 - Present" title="Microsoft .NET Developer" icon={['fas', 'briefcase']} left="-7px">
                <p>Cooper Grace Ward Lawyers</p>
                <p>Brisbane, Queensland, Australia</p>
              </Timeline>

              <Timeline time="2019 - 2020" title="Software Engineer" icon={['fas', 'briefcase']} left="-7px">
                <p>Locatrix</p>
                <p>Loganholme, Queensland, Australia</p>
              </Timeline>

              <Timeline time="2017 - 2019" title="Senior Software Programmer" icon={['fas', 'briefcase']} left="-7px">
                <p>Sol Edu Pty Ltd</p>
                <p>Brisbane, Queensland, Australia</p>
              </Timeline>

              <Timeline time="2013 - 2015" title="IT and Data Specialist" icon={['fas', 'briefcase']} left="-7px">
                <p>Vietnam Education Foundation</p>
              </Timeline>

              <Timeline time="2011 - 2013" title="IT Officer" icon={['fas', 'briefcase']} left="-7px">
                <p>IDP Education Pty Ltd</p>
              </Timeline>

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Experience
