import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'react-bootstrap'
import { Skill, Counter, Section } from '../components'
import AvatarWithPrimaryBackground from '../images/avatar-primary-bg.svg'

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`
export class About extends React.Component {
  render () {
    return (
      <Section id="about" title="About Me">
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <div className="text-center mb-3">
                  <img src={AvatarWithPrimaryBackground} alt="kiendang" style={{ width: '150px' }} />
                </div>
              </Col>
              <Col md={12}>
                <Name className="text-center mb-3">
                  Kien Dang
                </Name>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col md={8}>
                  <p>
                    I am a Microsoft .NET developer with more than 5 years of experience in developing, testing, and implementing webservices, microservices
                    and web-based applications using Microsoft technologies, MS SQL Server, scheduled tasks, TFS and Azure services.
                  </p>
                  <p>
                    I am ambitious and hardworking, innovative and creative, very flexible and adaptable. I am also a quick learner and master new
                    technologies with ease; reliable team player as well as an independent individual.
                  </p>
                  <div className="mt-3 mb-3">
                    <Button variant="kd">Download CV</Button>
                  </div>
                </Col>
                <Col md={4}>
                  <Skill title=".NET Core" percent={95} backgroundColor="rgb(255, 209, 92)" />
                  <Skill title="NoSQL" percent={85} backgroundColor="rgb(108, 108, 229)" />
                  <Skill title="TypeScript" percent={80} backgroundColor="rgb(255, 76, 96)" />
                  <Skill title="GraphQL" percent={90} backgroundColor="rgb(51, 105, 30)" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Counter className="col-md-3 col-sm-6" description="Open-source projects" count={27} icon={['fab', 'osi']} />
          <Counter className="col-md-3 col-sm-6" description="Projects completed" count={59} icon={['fas', 'tasks']} />
          <Counter className="col-md-3 col-sm-6" description="Cup of coffee" count={3285} icon={['fas', 'coffee']} />
          <Counter className="col-md-3 col-sm-6" description="Publications" count={2} icon={['far', 'newspaper']} />
        </Row>
      </Section>
    )
  }
}

export default About
