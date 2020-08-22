import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AvatarWithPrimaryBackground from '../images/avatar-primary-bg.svg'
import Skill from '../components/Skill'
import Counter from '../components/Counter'

export class About extends React.Component {
  render() {
    return (
      <section id="about">
        <Container>
          <h2 className="section-title wow fadeInUp mb-5">About Me</h2>

          <Row>
            <Col md={3}>
              <div className="text-center text-md-left">
                <img src={AvatarWithPrimaryBackground} alt="kiendang" style={{ width: "150px" }} />
              </div>
            </Col>
            <Col md={9} className="triangle-left-md triangle-top-sm">
              <div className="rounded bg-white shadow-dark padding-30">
                <Row>
                  <Col md={6}>
                    <p>
                      I am kiendang, a Microsoft .NET developer with more than 5 years of experience in 
                      developing, testing, and implementing webservices, microservices 
                      and web-based applications.
                    </p>
                    <div className="mt-3">
                      <Button variant="kd">Download CV</Button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Skill title="Relational databases" percent={85} backgroundColor="rgb(255, 209, 92)"></Skill>
                    <Skill title=".NET Framework" percent={95} backgroundColor="rgb(255, 76, 96)"></Skill>
                    <Skill title="No SQL" percent={75} backgroundColor="rgb(108, 108, 229)"></Skill>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Counter className="col-md-3 col-sm-6" description="Open-source projects" count={26} icon={["fab", "osi"]} />
            <Counter className="col-md-3 col-sm-6" description="Projects completed" count={59} icon={["fas", "tasks"]} />
            <Counter className="col-md-3 col-sm-6" description="Cup of coffee" count={3285} icon={["fas", "coffee"]} />
            <Counter className="col-md-3 col-sm-6" description="Publications" count={2} icon={["far", "newspaper"]} />
          </Row>
        </Container>
      </section>
    )
  }
}

export default About