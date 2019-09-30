import React, { Component } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import NavbarComponent from '../navbar';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import SectionOne from './section1';
import BannerIndex from './banner';
import Card1 from '../../images/card1.svg';
import Card2 from '../../images/card2.svg';
import Card3 from '../../images/card3.svg';
import Card4 from '../../images/card4.svg';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
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
      <div>
        <div className='full-width-image'>
          <NavbarComponent active={this.state.expanded} />
          <div className='container-row-center'>
            <div className='container-info'>
              <p className='title-home-container-principal'>Welcome to apex</p>
              <p className='text-description-container-principal'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis,
                pellentesque fringilla congue donec aptent sed porttitor,
                malesuada litora scelerisque diam potenti integer risus.
                Mattis tempor commodo fusce eros viverra aliquet nisl,
                congue mus eget nullam curae mauris rutrum, curabitur cras dui vitae consequat class.
              </p>
              <Button className='buttons-home'>Join apex</Button>
              <Button className='buttons-home'>More info</Button>
            </div>
          </div>
        </div>
        <SectionOne />
        <div className='container-third'>
          <Container>
            <Row>
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
          <BannerIndex />
          <Container fluid>
            <Row style={{ padding: 25 }}>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card4} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='container-footer'>
          <p className='text-footer'>© 2019 All rights reserved - Apex</p>
        </div>
      </div>
    );
  }
}
export default HomeIndex;
