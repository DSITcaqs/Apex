import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class BannerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='container-form-contact-banner'>
        <Container>
          <Row>
            <Col md={12}>
              <p style={{ fontSize: 50, color: "#FFF", marginBottom: 0 }}>+$6,000</p>
              <p style={{ fontSize: 50, color: "#FFF" }}>Millones en ventas durante 2019</p>

              <p style={{ fontSize: 20, color: "#FFF", marginBottom: 0 }}>Somos un fondo de capital privadi que invierte en empresas del mercado en México,</p>
              <p style={{ fontSize: 20, color: "#FFF", marginBottom: 0 }}>siempre considerando traer a nuestra red, experiencia para lograr altos retornos a tráves</p>
              <p style={{ fontSize: 20, color: "#FFF", marginBottom: 0 }}>de ganancias de capital al invertir en un portafolio diversificado.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default BannerIndex;