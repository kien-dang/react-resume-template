import React from 'react'
import { Container } from 'react-bootstrap'

interface Props {
  id: string
  title: string
  children: React.ReactNode
}

export class Section extends React.Component<Props> {
  render() {
    return(
      <section id={this.props.id}>
        <Container>
          <h2 className="section-title mb-5">{this.props.title}</h2>

          {this.props.children}
        </Container>
      </section>
    )
  }
}

export default Section
