import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Jquery from '../images/jquery.svg'
import Html5 from '../images/html5.svg'
import Css3 from '../images/css3.svg'
import DotNet from '../images/dotnet.svg'

export class Tools extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={Jquery} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={Html5} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={DotNet} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={Css3} alt="client-name" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Tools