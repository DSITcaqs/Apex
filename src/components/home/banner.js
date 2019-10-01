import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
            <Col md={2} />
            <Col md={6}>
              <Form.Control className="input-contact-banner" placeholder="Ingresa tu correo electronico" type="email" />
            </Col>
            <Col md={2}>
              <Button className="button-contact-banner" variant="primary">Contactar</Button>
            </Col>
            <Col md={2} />
          </Row>
        </Container>
      </div>
    );
  }
}
export default BannerIndex;