import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

interface Props {
  time: string
  title: string
  icon: IconProp
  left?: string
}

export class Timeline extends React.Component<Props> {
  render () {
    const props = this.props

    const IconBox = styled.div({
      background: '#fff',
      fontSize: '24px',
      color: '#ff4c60',
      position: 'absolute',
      left: this.props.left ? this.props.left : '-10px',
      top: 0,
      zIndex: 1,
      fontWeight: 900
    })

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
