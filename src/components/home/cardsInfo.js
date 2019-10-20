import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Card1 from '../../images/bombilla.svg';
import Card2 from '../../images/calendario.svg';
import Card3 from '../../images/reloj.svg';
import Card4 from '../../images/bolsa-de-dinero.svg';

class CardsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  redirectProducts() {
    this.props.data.history.push('/productos');
  }

  render() {
    return ( //#54b36f verde
      <Container fluid className='container-info-cards'>
        <p className='title-container-third'>VENTAJAS DE APEX FUNDS</p>
        <Row style={{ padding: 25 }}>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card className="tarjetas-info" style={{ width: '18rem' }}>
                <div className="container-image-card-green">
                  <Card.Img variant="top" src={Card1} />
                </div>
                <Card.Body>
                  <Card.Text>
                    Tasas de interés 3X más altas que cualquier banco en México.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => { this.redirectProducts() }} className='button-card' variant="primary">Ver mas</Button>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card className="tarjetas-info" style={{ width: '18rem' }}>
                <div className="container-image-card-green">
                  <Card.Img variant="top" src={Card2} />
                </div>
                <Card.Body>
                  <Card.Text>
                    Tres diferentes tipos de opciones de inversión, dando la oportunidad de retirar ganancias cada trimestre.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => { this.redirectProducts() }} className='button-card' variant="primary">Ver mas</Button>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card className="tarjetas-info" style={{ width: '18rem' }}>
                <div className="container-image-card-green">
                  <Card.Img variant="top" src={Card3} />
                </div>
                <Card.Body>
                  <Card.Text>
                    Contratos con la posibilidad de ser renovado año a año.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => { this.redirectProducts() }} className='button-card' variant="primary">Ver mas</Button>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card className="tarjetas-info" style={{ width: '18rem' }}>
                <div className="container-image-card-green">
                  <Card.Img variant="top" src={Card4} />
                </div>
                <Card.Body>
                  <Card.Text>
                    Contratos en dólares, protegiendo el capital contra la devaluación de la moneda en México.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => { this.redirectProducts() }} className='button-card' variant="primary">Ver mas</Button>
                </Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CardsIndex;
