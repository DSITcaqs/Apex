import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from '../navbar';
import FotterComponent from '../footer';

class ProductosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} />
        <div style={{ width: "100%", height: 250, backgroundColor: "#61D081", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p className="title-nosotros-container-principal">Productos</p>
        </div>
        <Container style={{ marginTop: 78 }}>
          <p className="title-brokrage">Elige el plan adecuado para ti y contactanos</p>
          <Row>
            <Col md={4}>
              <div className="container-plan">
                <div>
                  <p style={{ color: "#FFF", fontSize: 30, marginBottom: 0, fontWeight: "bold" }}>1.8% - 2.3%</p>
                  <p style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>Plan moderado</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="container-plan">
                <div>
                  <p style={{ color: "#FFF", fontSize: 30, marginBottom: 0, fontWeight: "bold" }}>2.5% - 4%</p>
                  <p style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>Plan activo</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="container-plan">
                <div>
                  <p style={{ color: "#FFF", fontSize: 30, marginBottom: 0, fontWeight: "bold" }}>5% - 8%</p>
                  <p style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>Plan proactivo</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: "rgb(242,242,242)" }}>
          <Container style={{ marginTop: 78, padding: 20 }}>
            <p className="title-brokrage">Procedimiento</p>
            <Row>
              <Col md={12}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                  <div className="steps-circle">1</div>
                  <div>
                    <p className="steps-title">Se decide el plan mas adecuado</p>
                    <p style={{ marginBottom: 0 }}>Se llena el formato de inversión para generar el contrato.</p>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                  <div className="steps-circle">2</div>
                  <div>
                    <p className="steps-title">Se firma el contrato de inversión</p>
                    <p style={{ marginBottom: 0 }}>Se entregan las clausulas correspondientes al contrato.</p>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                  <div className="steps-circle">3</div>
                  <div>
                    <p className="steps-title">Se transfiere el dinero</p>
                    <p style={{ marginBottom: 0 }}>Directamente en la cuenta a nombre del cliente en Global Next Trade.</p>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                  <div className="steps-circle">4</div>
                  <div>
                    <p className="steps-title">Se pactan las fechas de ROI</p>
                    <p style={{ marginBottom: 0 }}>Se determina el plazo de 3,6, 12 meses.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FotterComponent />
      </div>
    );
  }
}
export default ProductosIndex;
