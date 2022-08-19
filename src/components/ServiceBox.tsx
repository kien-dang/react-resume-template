import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  backgroundColor: string
  image: string
  children: React.ReactNode
}

export class ServiceBox extends React.Component<Props> {
  render() {
    const props = this.props

    const bgColor = props.backgroundColor ? props.backgroundColor : '#342054'
    const Wrapper = styled.div`
      background-color: ${bgColor};
    `

    return(
      <Wrapper className="service-box rounded data-background padding-30 text-center text-light shadow-blue mb-4">
        <img src={props.image} alt={props.title} />
        <h3 className="mb-3 mt-0">{props.title}</h3>
        {props.children}
      </Wrapper>
    )
  }
}

export default ServiceBox
