import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Card1 from '../../images/imagen-cards.jpeg';
import Card2 from '../../images/imagen-cards.jpeg';
import Card3 from '../../images/imagen-cards.jpeg';
import Card4 from '../../images/imagen-cards.jpeg';

class CardsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container fluid className='container-info-cards' style={{ backgroundColor: '#f2f2f2' }}>
        <p className='title-container-third'>VENTAJAS DE APEX FUNDS</p>
        <Row style={{ padding: 25 }}>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Text>
                    Tasas de interés 3X más altas que cualquier banco.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button className='button-card' variant="primary">Ver mas</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Text>
                    Tres diferentes tipos de opciones de inversión, dando la oportunidad de retirar ganancias cada trimestre.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button className='button-card' variant="primary">Ver mas</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Card3} />
                <Card.Body>
                  <Card.Text>
                    Contratos en dólares, protegiendo el capital contra devaluación de la moneda en México.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button className='button-card' variant="primary">Ver mas</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Card4} />
                <Card.Body>
                  <Card.Text>
                    Contratos con la posibilidad de ser renovado año con año.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button className='button-card' variant="primary">Ver mas</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CardsIndex;