import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
class ProductosSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  redirectProducts() {
    //this.props.data.history.push('/productos');
    return <Redirect to='/productos' />
  }

  render() {
    return (
      <div>
      <Container style={{ marginTop: 50,marginBottom: 50 }}>
        <p className="title-brokrage">Elige el plan adecuado para ti y contactanos</p>
        <Row>
          <Col md={4}>
            <div className="container-plan" onClick={() => { this.redirectProducts() }}>
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
      </div>

    );
  }
}
export default ProductosSimple;
