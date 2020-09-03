import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  percent: number
  backgroundColor?: string
}

export class Skill extends React.Component<Props> {
  render () {
    const props = this.props

    const bgColor = props.backgroundColor ? props.backgroundColor : '#f1f1f1'
    const ProgressBar = styled.div`
      width: ${props.percent}%;
      background-color: ${bgColor};
    `

    return (
      <div className="skill-item mb-4">
        <div className="skill-info clearfix">
          <h4 className="float-left mb-3 mt-0">{props.title}</h4>
          <span className="float-right">{`${props.percent}%`}</span>
        </div>
        <div className="progress">
          <ProgressBar className="progress-bar data-background" />
        </div>
      </div>
    )
  }
}

export default Skill
