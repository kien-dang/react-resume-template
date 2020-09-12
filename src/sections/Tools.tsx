import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export class Tools extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/jquery-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/html5-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/typescript-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/css3-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/sqlserver-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/azure-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/dotnetcore-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <div className="knowledge">
              <div className="item">
                <img src={require('../images/graphql-bw.svg')} alt="client-name" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Tools
