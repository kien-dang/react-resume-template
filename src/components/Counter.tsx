import React from 'react'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import TrackVisibility from 'react-on-screen'
import CountUp from 'react-countup'

interface Props {
  className?: string
  description: string
  count: number
  icon: IconProp
  iconSize?: SizeProp
}

const Box = styled.div({
  float: 'left',
  color: '#dedeea',
  fontSize: '36px'
})

export class Counter extends React.Component<Props> {

  render () {
    const props = this.props

    return (
      <div className={props.className}>
        <div className="fact-item">
          <Box>
            <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
          </Box>
          <div className="details">
            <h3 className="mb-0 mt-0 number">
              <em className="count">
                <TrackVisibility once>
                  { ({ isVisible }) => isVisible && <CountUp end={props.count} /> }
                </TrackVisibility>
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
