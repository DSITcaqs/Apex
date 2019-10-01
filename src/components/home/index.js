import React, { Component } from 'react';
import NavbarComponent from '../navbar';
import SectionOne from './section1';
import BannerIndex from './banner';
import CarouselComponent from './carousel';
import CardsComponent from './cardsInfo';
import BackgroundPrincipalComponent from './backgroundPrincipal';
import Footer from './footer';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <NavbarComponent active={this.state.expanded} />
        <BackgroundPrincipalComponent />
        <SectionOne />
        <CarouselComponent />
        <BannerIndex />
        <CardsComponent />
        <Footer />
=======
        <div className='full-width-image'>
          <NavbarComponent active={this.state.expanded} />
          <div className='container-row-center'>
            <div className='container-info'>
              <p className='title-home-container-principal'>Creación de riqueza rediseñada.</p>
              <p className='text-description-container-principal'>
                 APEX FUNDS GROUP pretende ser una compañía líder en manejo de capital, que contribuye a un panorama de inversión más justo para México y para todo américa latina.
              </p>
              <Button className='buttons-home'>Unete al Grupo</Button>
              <Button className='buttons-home'>Más Información</Button>
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
            <h1>VENTAJAS DE APEX FUNDS</h1>
            <Row style={{ padding: 25 }}>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card1} />
                  <Card.Body>
                    <Card.Text>
                        Tasas de interés 3X más altas que cualquier banco.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card2} />
                  <Card.Body>
                    <Card.Text>
                         Tres diferentes tipos de opciones de inversión, dando la oportunidad de retirar ganancias cada trimestre.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card3} />
                  <Card.Body>
                    <Card.Text>
                       Contratos en dólares, protegiendo el capital contra devaluación de la moneda en México.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Card4} />
                  <Card.Body>
                    <Card.Text>
                       Contratos con la posibilidad de ser renovado año con año.
<p>&nbsp;</p>
<p>&nbsp;</p>
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
>>>>>>> bbc2bbdf2a54979120e1d9ce89f7eb2b051fa231
      </div>
    );
  }
}
export default HomeIndex;
