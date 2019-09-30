import React, { Component } from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';

class BannerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>
          <Col md={12}>
            <div className='full-width-image-banner'>

            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BannerIndex;
