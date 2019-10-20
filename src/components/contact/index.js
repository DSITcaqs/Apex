import React, { Component } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import NavbarComponent from '../navbar';
import Contact from '../../images/contactanos.jpg';
import FotterComponent from '../footer';
//


class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'contact',
    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} data={this.props.data} />
        <Container fluid style={{ marginTop: 78 }}>
          <Row>
            <Col md={6}>
              <div style={{ padding: 50 }}>
                <p style={{ textAlign: "center", fontSize: 25 }}>Contactanos</p>
                <Image src={Contact} fluid />
              </div>
            </Col>
            <Col md={6}>
              <div style={{ padding: 50 }}>
                <Form className="container-contact" >
                  <Form.Group>
                    <Form.Label className="label-contact">Nombre completo</Form.Label>
                    <Form.Control
                      type="text"
                      className="input-contact"
                      value={this.state.nombrecompleto}
                      onChange={(nombrecompleto) => { this.setState({ nombrecompleto: nombrecompleto.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">Correo electronico</Form.Label>
                    <Form.Control
                      type="text"
                      className="input-contact"
                      value={this.state.correoelectronico}
                      onChange={(correoelectronico) => { this.setState({ correoelectronico: correoelectronico.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      className="input-contact"
                      value={this.state.telefono}
                      onChange={(telefono) => { this.setState({ telefono: telefono.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">País</Form.Label>
                    <Form.Control
                      type="text"
                      className="input-contact"
                      value={this.state.pais}
                      onChange={(pais) => { this.setState({ pais: pais.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">Monto estimado para invertir</Form.Label>
                    <Form.Control
                      type="text"
                      className="input-contact"
                      value={this.state.montoestimado}
                      onChange={(montoestimado) => { this.setState({ montoestimado: montoestimado.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">Plan interesado</Form.Label>
                    <Form.Control
                      type="text"
                      className="input-contact"
                      value={this.state.planinteres}
                      onChange={(planinteres) => { this.setState({ planinteres: planinteres.target.value }) }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">Comentarios</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      className="input-contact"
                      value={this.state.planinteres}
                      onChange={(planinteres) => { this.setState({ planinteres: planinteres.target.value }) }}
                    />
                  </Form.Group>


                </Form>

              </div>
            </Col>
          </Row>
        </Container>
        <FotterComponent />
      </div>
    );
  }
}
export default ContactIndex;
