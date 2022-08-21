import React from 'react'
import { Section } from '../components'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import RecommendationConfig from '../data/recommendations.json'

const recommendations = RecommendationConfig.recommendations

export class Recommendations extends React.Component {
  render() {
    const options = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
    }

    return(
      <Section id="recommendations" title="Recommendations">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Slider {...options}>
              { recommendations.map(r => (
                <div className="slick-slide" key={r.name}>
                  <div className="text-center">
                    <div className="mb-3">
                      <img src={r.avatar} alt={r.name} className="mx-auto" />
                    </div>
                    <h4 className="mt-3 mb-0">{r.name}</h4>
                    <span className="subtitle">{r.jobTitle}</span>
                    <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4 mb-4 ms-4 me-4">
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
