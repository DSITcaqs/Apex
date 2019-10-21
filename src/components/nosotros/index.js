import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from '../navbar';
import FotterComponent from '../footer';

class NosotrosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} data={this.props.data} />
        <div style={{ width: "100%", height: 250, backgroundColor: "#61D081", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p className="title-nosotros-container-principal">Nosotros</p>
        </div>
        <Container style={{ marginTop: 78 }}>
          <Row>
            <Col md={12}>
              <p className="title-brokrage">Historia</p>
              <p>
                APEX FUNDS GROUP comenzó operaciones en el año 2012 buscando ser una alternativa para el panorama actual, de inversiones en México.
                Concentrando el potencial de mercados ffinancieros, el enfoque fue poder odrecer opciones seguras y mas actrativas para diferentes perfiles
                de inversionistas.
            </p>
            </Col>
            <Col md={6}>
              <p className="title-brokrage">Misión</p>
              <p>
                Proveer servicios seguros y altamente actractivos para el manejo de capital personal y empresarial;
                permitiendo al cliente tener rendimientos por encima del mercado de manera tranquila.
            </p>
            </Col>
            <Col md={6}>
              <p className="title-brokrage">Visión</p>
              <p>
                APEX FUNDS GROUP pretende ser una compañia lider en manerjo de capital,
                que contribuye a un panorama de inversión mas justo para México y para todo américa latina.
              </p>
            </Col>
          </Row>
        </Container>
        <div style={{ height: 150 }} />
        {/* <div style={{ backgroundColor: "rgba(242,242,242)", padding: 20 }}>
          <Container>
            <Row>
              <Col md={6}>
                <p style={{ fontSize: 18, fontWeight: "bold" }}>Titulo aqui</p>
                <p>Más de 8 años de experiencia en estrategias de inversión.</p>
              </Col>
              <Col md={6}>
                <p style={{ fontSize: 18, fontWeight: "bold" }}>Titulo aqui</p>
                <p>Impulsado los mercados en México y Latinoamérica.</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p style={{ fontSize: 18, fontWeight: "bold" }}>Titulo aqui</p>
                <p>Manejando un enfoque de para mejorar el potencial de todas nuestras inversiones.</p>
              </Col>
              <Col md={6}>
                <p style={{ fontSize: 18, fontWeight: "bold" }}>Titulo aqui</p>
                <p>Interesados en mantener una relación de confianza con nuestros clientes.</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p style={{ fontSize: 18, fontWeight: "bold" }}>Titulo aqui</p>
                <p>Líderes en el ramo y con expertos en la ejecución financiera.</p>
              </Col>
              <Col md={6}>
                <p style={{ fontSize: 18, fontWeight: "bold" }}>Titulo aqui</p>
                <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </Col>
            </Row>
          </Container>
        </div> */}
        <FotterComponent />
      </div>
    );
  }
}
export default NosotrosIndex;
