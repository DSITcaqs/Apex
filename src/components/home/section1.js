import React, { Component } from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import SecondaryImage1 from '../../images/card1.svg';
import SecondaryImage2 from '../../images/card2.svg';
import SecondaryImage3 from '../../images/card3.svg';
import SecondaryImage4 from '../../images/card4.svg';

class SectionOneIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage1} fluid />
              <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales etc.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage2} fluid />
              <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales etc.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage3} fluid />
              <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales etc.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className='container-secondary'>
              <Image className='secondary-image' src={SecondaryImage4} fluid />
              <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales etc.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SectionOneIndex;
