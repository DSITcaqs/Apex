import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from '../navbar';

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
        <Container style={{ marginTop: 78 }}>
          <Row>
            <Col md={4}>
              <p>Plan moderado</p>
              <p>1.8% - 2.3%</p>
            </Col>
            <Col md={4}>
              <p>Plan activo</p>
              <p>2.5% - 4%</p>
            </Col>
            <Col md={4}>
              <p>Plan proactivo</p>
              <p>5% - 8%</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <p>Procedimiento</p>
          <Row>
            <Col md={3}>
              <p>Se decide el plan mas adecuado</p>
              <p>Se llena el formato de inversión para generar el contrato.</p>
            </Col>
            <Col md={3}>
              <p>Se firma el contrato de inversión</p>
              <p>Se entregan las clausulas correspondientes al contrato.</p>
            </Col>
            <Col md={3}>
              <p>Se transfiere el dinero</p>
              <p>Directamente en la cuenta a nombre del cliente en Global Next Trade.</p>
            </Col>
            <Col md={3}>
              <p>Se pactan las fechas de ROI</p>
              <p>Se determina el plazo de 3,6, 12 meses.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ProductosIndex;
