import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Jquery from '../images/jquery-bw.svg'
import Html5 from '../images/html5-bw.svg'
import DotNetCore from '../images/dotnetcore-bw.svg'
import Css3 from '../images/css3-bw.svg'
import SqlServer from '../images/sqlserver-bw.svg'
import Azure from '../images/azure-bw.svg'
import TypeScript from '../images/typescript-bw.svg'
import GraphQL from '../images/graphql-bw.svg'

export class Tools extends React.Component {
  render () {
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
                <img src={DotNetCore} alt="client-name" />
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

        <Row>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={SqlServer} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={Azure} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={TypeScript} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={GraphQL} alt="client-name" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Tools
