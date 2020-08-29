import React from 'react'
import { Section } from '../components'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Avatar from '../images/avatar.svg'
import AvatarWithPrimaryBackground from '../images/avatar-primary-bg.svg'

export class Review extends React.Component {
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
                    <img src={Avatar} alt="customer-name" />
                  </div>
                  <h4 className="mt-3 mb-0">John Doe</h4>
                  <span className="subtitle">Product designer at Dribbble</span>
                  <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4">
                    <p className="mb-0">I enjoy working with the theme and learn so much. You guys make the process fun and
                      interesting. Good luck! <span role="img" aria-label="fire">🔥</span></p>
                  </div>
                </div>
              </div>
              <div className="slick-slide">
                <div className="text-center mx-auto">
                  <div className="mb-3 mx-auto">
                    <img src={AvatarWithPrimaryBackground} alt="customer-name" />
                  </div>
                  <h4 className="mt-3 mb-0">John Doe</h4>
                  <span className="subtitle">Product designer at Dribbble</span>
                  <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4">
                    <p className="mb-0">I enjoy working with the theme and learn so much. You guys make the process fun and interesting.
                    Good luck! <span role="img" aria-label="like">👍</span></p>
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

export default Review
