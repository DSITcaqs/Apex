import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from '../navbar';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} />
        <div className='full-width-image'>
          <div className='container-row-center'>
            <div className='container-info'>
              <p className='title-home-container-principal'>Welcome to apex</p>
              <p className='text-description-container-principal'>Lorem ipsum dolor sit amet consectetur adipiscing elit mollis,
                pellentesque fringilla congue donec aptent sed porttitor,
                malesuada litora scelerisque diam potenti integer risus.
                Mattis tempor commodo fusce eros viverra aliquet nisl,
                congue mus eget nullam curae mauris rutrum, curabitur cras dui vitae consequat class.
              </p>
              <Button className='buttons-home'>Join apex</Button>
              <Button className='buttons-home'>More info</Button>
            </div>
          </div>
        </div>
        <Container fluid>
          <Row>
            <Col>

            </Col>
          </Row>
          <Row>
            <Col>Section 2</Col>
          </Row>
          <Row>
            <Col>Section 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default HomeIndex;
