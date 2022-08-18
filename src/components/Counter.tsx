import React from 'react'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

interface Props {
  className?: string
  description: string
  count: number
  icon: IconProp
  iconSize?: SizeProp
}

interface State {
  loaded: boolean
}

const Box = styled.div({
  float: 'left',
  color: '#dedeea',
  fontSize: '36px'
})

export class Counter extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  onChange = (isVisible: boolean): void => {
    if (isVisible && !this.state.loaded) {
      this.setState({
        loaded: true
      })
    }
  }

  render() {
    const props = this.props

    return(
      <div className={props.className}>
        <div className="fact-item">
          <Box>
            <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
          </Box>
          <div className="details">
            <h3 className="mb-0 mt-0 number">
              <em className="count">
              <VisibilitySensor onChange={this.onChange} delayedCall >
                <CountUp start={0} end={this.state.loaded ? props.count : 0} />
              </VisibilitySensor>
              </em>
            </h3>
            <p className="mb-0">{props.description}</p>
          </div>
        </div>
        <div className="spacer d-md-none d-lg-none" data-height="30" />
      </div>
    )
  }
}

export default Counter
