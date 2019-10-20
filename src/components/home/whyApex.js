import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SecondaryImage1 from '../../images/eight-persons.svg';
import SecondaryImage2 from '../../images/america.svg';
import SecondaryImage3 from '../../images/stock.svg';
import SecondaryImage4 from '../../images/dollar.svg';

class WhyApex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }
  }

  render() {
    return (
      <Container className='container-why'>
        <p className="title-brokrage">Por qué Nosotros?</p>
        <Row>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage1} fluid/>
              <p className='secondary-title'></p>
              <p className='secondary-text'>Más de 8 años de experiencia en estrategias de inversión.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage2} fluid />
              <p className='secondary-title'></p>
              <p className='secondary-text'>Manejando un enfoque de para mejorar el potencial de todas nuestras inversiones e impulsado los mercados en México y Latinoamérica.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage3} fluid />
              <p className='secondary-title'></p>
              <p className='secondary-text'>Interesados en mantener una relación de confianza con nuestros clientes.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage4} fluid />
              <p className='secondary-title'></p>
              <p className='secondary-text'>Líderes en el ramo y con expertos en la ejecución financiera.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default WhyApex;
