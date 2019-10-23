import React, { Component } from 'react';
import { Container, Row, Col, Form, Image, Button, Dropdown } from 'react-bootstrap';
import NavbarComponent from '../navbar';
import Contact from '../../images/contactanos.jpg';
import FotterComponent from '../footer';


class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'contact',
      planinteres: 'Plan moderado',
      nombrecompleto: '',
      correoelectronico: '',
      telefono: '',
      pais: '',
      comentarios: '',
    }
  }

  sendEmail() {
    const templateId = 'template_Geboo36s';
    if (this.state.planinteres !== "" && this.state.pais !== "" && + this.state.telefono !== "" && this.state.comentarios !== "") {
      this.sendFeedback(
        templateId,
        {
          message_html: 'Me interesa el: ' + this.state.planinteres + ' , soy del país: ' + this.state.pais + ' .Tambien te anexo mi numero telefonico: ' + this.state.telefono + ' Comentarios: ' + this.state.comentarios,
          from_name: this.state.nombrecompleto,
          reply_to: this.state.correoelectronico
        }
      );
    } else {
      alert('Verify the information, there are empty fields.');
    }
  }

  sendFeedback(templateId, variables) {
    const self = this;
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      alert('Email successfully sent!');
      self.setState({
        planinteres: 'Plan moderado',
        nombrecompleto: '',
        correoelectronico: '',
        telefono: '',
        pais: '',
        comentarios: '',
      });
    }).catch(err => alert('Oh well, you failed. Here some thoughts on the error that occured:'))
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
                    <Form.Label className="label-contact">Plan interesado</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.state.planinteres}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { this.setState({ planinteres: "Plan moderado" }) }}>Plan moderado</Dropdown.Item>
                        <Dropdown.Item onClick={() => { this.setState({ planinteres: "Plan activo" }) }}>Plan activo</Dropdown.Item>
                        <Dropdown.Item onClick={() => { this.setState({ planinteres: "Plan proactivo" }) }}>Plan proactivo</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="label-contact">Comentarios</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      className="input-contact"
                      value={this.state.comentarios}
                      onChange={(comentarios) => { this.setState({ comentarios: comentarios.target.value }) }}
                    />
                  </Form.Group>
                  <Button onClick={() => { this.sendEmail() }}>
                    Send email
                  </Button>
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
