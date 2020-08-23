import React from 'react'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

interface Props {
  time: string
  title: string
  icon: IconProp
}


const IconBox = styled.div`
  background: #fff;
  font-size: 24px;
  color: #ff4c60;
  position: absolute;
  left: -10px;
  top: 0;
  z-index: 1;
  font-weight: 900;
`

export class Timeline extends React.Component<Props> {
  render() {
    const props = this.props

    return (
      <div className="timeline-container wow fadeInUp">
        <div className="content">
          <span className="time">{this.props.time}</span>
          <h3 className="title">{this.props.title}</h3>
          {this.props.children}
        </div>
        <IconBox>
          <FontAwesomeIcon icon={props.icon} />
        </IconBox>
      </div>
    )
  }
}

export default Timeline