import React from 'react'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'

interface Props {
  title: string
  percent: number
  backgroundColor?: string
}

interface State {
  displayPercent: number
}

export class Skill extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      displayPercent: 0
    }
  }

  onChange = (isVisible: boolean) => {
    console.log(isVisible)

    if (isVisible) {
      this.setState({
        displayPercent: this.props.percent
      })
    }
  }

  render () {
    const props = this.props

    const bgColor = props.backgroundColor ? props.backgroundColor : '#f1f1f1'
    const ProgressBar = styled.div`
      width: ${this.state.displayPercent}%;
      background-color: ${bgColor};
    `

    return (
      <div className="skill-item mb-4">
        <div className="skill-info clearfix">
          <h4 className="float-left mb-3 mt-0">{props.title}</h4>
          <span className="float-right">{`${props.percent}%`}</span>
        </div>
        <div className="progress">
          <VisibilitySensor onChange={this.onChange} delayedCall>
            <div className="progress-bar data-background" style={{ width: `${this.state.displayPercent}%`, backgroundColor: `${bgColor}` }} />
            {/* <ProgressBar className="progress-bar data-background" /> */}
          </VisibilitySensor>
        </div>
      </div>
    )
  }
}

export default Skill
