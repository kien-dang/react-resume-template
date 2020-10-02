import React from 'react'
import { Section } from '../components'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RecommendationConfig from '../data/recommendations.json'

const recommendations = RecommendationConfig.recommendations

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
              { recommendations.map(r => (
                <div className="slick-slide" key={r.name}>
                  <div className="text-center mx-auto">
                    <div className="mb-3 mx-auto">
                      <img src={r.avatar} alt={r.name} />
                    </div>
                    <h4 className="mt-3 mb-0">{r.name}</h4>
                    <span className="subtitle">{r.jobTitle}</span>
                    <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ml-4 mr-4">
                      <p className="mb-0">
                        {r.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Recommendations
