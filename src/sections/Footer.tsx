import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const StyledFooter = styled.footer({
  marginTop: '110px'
})

export class Footer extends React.Component {
  render () {
    return (
      <StyledFooter className="footer">
        <Container>
          <span className="copyright">© 2020 kiendang react resume template.</span>
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer
