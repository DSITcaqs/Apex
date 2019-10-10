import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import NavbarComponent from '../navbar';

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
        <NavbarComponent active={this.state.expanded} />
        <Container fluid style={{ marginTop: 78 }}>
          <Row>
            <Col md={6}>
              <p>Contactanos</p>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label-signup">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Smith"
                    className="input-signup"
                    value={this.state.lastName}
                    onChange={(lastName) => { this.setState({ lastName: lastName.target.value }) }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ContactIndex;
