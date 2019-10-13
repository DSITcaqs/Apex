import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import ImageBanner from "../../images/banner-bottom.jpg";

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
            <Col md={12}>
              <p style={{ fontSize: 50, color: "#FFF", marginBottom: 0 }}>+6,000</p>
              <p style={{ fontSize: 50, color: "#FFF" }}>MILLION IN 2019 SALLES</p>

              <p style={{ fontSize: 20, color: "#FFF", marginBottom: 0 }}>We are a Private Equity Fund that invests in middle-market companies in Mexico and beyond bringing</p>
              <p style={{ fontSize: 20, color: "#FFF", marginBottom: 0 }}>our network and experience to achieve high returns through capital gains by investing in a diversified portfotilio</p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default BannerIndex;