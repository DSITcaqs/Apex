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
      <div style={{ backgroundColor: "rgb(242,242,242)" }}>
        <Container style={{ padding: 30 }}>
          <Row>
            <Col md={6}>
              <div style={{ display: "flex", justifyContent: "center", paddingTop: 50 }}>
                <Image src={GlobalNextTrade} style={{ width: 200, height: 200 }} />
              </div>
            </Col>
            <Col md={6}>
              <p className="title-brokrage">BROKRAGE</p>
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
      </div>
    );
  }
}
export default BrokageIndex;
