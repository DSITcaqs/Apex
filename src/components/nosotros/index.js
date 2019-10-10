import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from '../navbar';

class NosotrosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} />
        <Container style={{ marginTop: 78 }}>
          <Row>
            <Col md={12}>
              <p>Historia</p>
              <p>
                APEX FUNDS GROUP comenzó operaciones en el año 2012 buscando ser una alternativa para el panorama actual, de inversiones en México.
                Concentrando el potencial de mercados ffinancieros, el enfoque fue poder odrecer opciones seguras y mas actrativas para diferentes perfiles
                de inversionistas.
            </p>
            </Col>
            <Col md={6}>
              <p>Misión</p>
              <p>
                Proveer servicios seguros y altamente actractivos para el manejo de capital personal y empresarial;
                permitiendo al cliente tener rendimientos por encima del mercado de manera tranquila.
            </p>
            </Col>
            <Col md={6}>
              <p>Visión</p>
              <p>
                APEX FUNDS GROUP pretende ser una compañia lider en manerjo de capital,
                que contribuye a un panorama de inversión mas justo para México y para todo américa latina.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={4}>
              <p>Más de 8 años de experiencia en estrategias de inversión.</p>
            </Col>
            <Col md={4}>
              <p>Impulsado los mercados en México y Latinoamérica.</p>
            </Col>
            <Col md={4}>
              <p>Manejando un enfoque de para mejorar el potencial de todas nuestras inversiones.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <p>Interesados en mantener una relación de confianza con nuestros clientes.</p>
            </Col>
            <Col md={4}>
              <p>Líderes en el ramo y con expertos en la ejecución financiera.</p>
            </Col>
            <Col md={4}>
              <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NosotrosIndex;
