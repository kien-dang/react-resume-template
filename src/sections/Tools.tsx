import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import knowledge from '../data/knowledge.json'

const tools = knowledge.tools

export class Tools extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          { tools.map((t, index) => (
            <>
              {index % 4 === 0 && <div className="w-100 d-none d-md-block" />}
              <Col md={3} xs={6} key={t.name}>
                <div className="knowledge">
                  <div className="item">
                    <img src={t.image} alt={t.name} />
                  </div>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Tools
