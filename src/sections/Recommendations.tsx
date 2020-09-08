import React from 'react'
import { Section } from '../components'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Avatar from '../images/avatar.svg'
import AvatarWithPrimaryBackground from '../images/avatar-primary-bg.svg'

export class Recommendations extends React.Component {
  render () {
    let options = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
    }

    return (
      <Section id="recommendations" title="Recommendations">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Slider {...options}>
              <div className="slick-slide">
                <div className="text-center mx-auto">
                  <div className="mb-3 mx-auto">
                    <img src={Avatar} alt="Sam Collins" />
                  </div>
                  <h4 className="mt-3 mb-0">Sam Collins</h4>
                  <span className="subtitle">Team Leader and Project Manager at Locatrix</span>
                  <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4">
                    <p className="mb-0">
                      I had the pleasure of working with Kien for a little over a year — he was hard working,
                      passionate about quality software engineering and an exceptional problem solver.
                      There was no task too difficult for Kien, and he continued to impress with great solutions to hard problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="text-center mx-auto">
                  <div className="mb-3 mx-auto">
                    <img src={AvatarWithPrimaryBackground} alt="Simon Sanderson" />
                  </div>
                  <h4 className="mt-3 mb-0">Simon Sanderson</h4>
                  <span className="subtitle">Software Specialist at Locatrix</span>
                  <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4">
                    <p className="mb-0">
                      I had the pleasure of working with Kien for a year and in that time he impressed me greatly with his ability
                      to pick up anything that was asked of him. He definitely punched above his weight and is a natural.
                      I'd recommend him to anyone and would happily provide a reference for him. He has a great attitude and always tries to please.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="text-center mx-auto">
                  <div className="mb-3 mx-auto">
                    <img src={AvatarWithPrimaryBackground} alt="Praneil Raniga" />
                  </div>
                  <h4 className="mt-3 mb-0">Praneil Raniga</h4>
                  <span className="subtitle">Senior Recruitment and Operations Consultant at PRA</span>
                  <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4">
                    <p className="mb-0">
                      I've worked with and placed Kien with one of my clients, receiving positive feedback on his work and ethics.
                      He is polite, hardworking, enjoys solving problems and learning! It's been great working with him,
                      and assisting him in finding his next job opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Recommendations
