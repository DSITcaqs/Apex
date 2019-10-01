import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class CarouselIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

  render() {
    return (
      <Container fluid className='container-third'>
        <Container>
          <Row style={{ paddingBottom: 50 }}>
            <Col>
              <AliceCarousel
                responsive={this.responsive}
                autoPlayInterval={2000}
                // autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                // playButtonEnabled={true}
                disableAutoPlayOnAction={true}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
              >
                {/* <img src="/img1" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
                <div className="carousel-contenido">1</div>
                <div className="carousel-contenido">2</div>
                <div className="carousel-contenido">3</div>
                <div className="carousel-contenido">4</div>
                <div className="carousel-contenido">5</div>
                <div className="carousel-contenido">6</div>
                <div className="carousel-contenido">7</div>
                <div className="carousel-contenido">8</div>
                <div className="carousel-contenido">9</div>
                <div className="carousel-contenido">10</div>
                <div className="carousel-contenido">11</div>
                <div className="carousel-contenido">12</div>
                <div className="carousel-contenido">13</div>
                <div className="carousel-contenido">14</div>
                <div className="carousel-contenido">15</div>
              </AliceCarousel>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default CarouselIndex;