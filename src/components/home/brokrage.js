import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import GlobalNextTrade from '../../images/gnt-capital.png';

class BrokageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container style={{ padding: 30 }}>
        <Row>
          <Col md={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={GlobalNextTrade} style={{ width: 300, height: 300 }} />
            </div>
          </Col>
          <Col md={6}>
            <p className="title-brokrage">Brokrage</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <p className="text-brokrage">
                Un broker es una institución financiera certificada y habilitada (Por sus conexiones y contratos
                con los principales proveedores de liquidez) para operar contratos de compra y venta dentro del mercado
                de divisas, un broker ejecuta las ordenes puestas por el operador.
              <br />
                Nosotros operamos con Global Next Trade1
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BrokageIndex;
