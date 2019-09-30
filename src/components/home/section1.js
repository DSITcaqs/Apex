import React, { Component } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import SecondaryImage1 from '../../images/card1.svg';
import SecondaryImage2 from '../../images/card2.svg';
import SecondaryImage3 from '../../images/card3.svg';
import SecondaryImage4 from '../../images/card4.svg';

class SectionOneIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage1} fluid/>
              <p className='secondary-text'>FOREX</p>
              <p className='secondary-text'>Es el mercado mas grande y mas líquido del mundo. Tiene un volumen de mas de 5.3 trillones de dólares por día, y opera 24 horas al día, 5 días a la semana.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage2} fluid />
              <p className='secondary-text'>OTC</p>
              <p className='secondary-text'>No tiene una sede específica, ni un organismo regulatorio central. Funciona a partir de las conexiones entre todos sus proveedores de liquidez.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage3} fluid />
              <p className='secondary-text'>GANANCIA</p>
              <p className='secondary-text'>Este mercado nos permite generar ganancias a partir del tipo de cambio entre las diferentes divisas del mundo.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage4} fluid />
              <p className='secondary-text'>INSTITUCIONES</p>
              <p className='secondary-text'>Global Next Trade</p>
	      <p className='secondary-text'>Merrill Lynch</p>
              <p className='secondary-text'>CFH Clearing</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SectionOneIndex;
