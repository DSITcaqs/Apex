import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import Arrw from '../../images/right-arrow.svg';
class BackgroundPrincipalIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  redirectProducts() {
    this.props.data.history.push('/productos');
  }

  render() {
    return (
      <div className='full-width-image'>
        <div className='container-row-center'>
          <div className='container-info'>
            <p className='title-home-container-principal'>BIENVENIDO A APEX</p>
            <p className='subtext-description-container-principal'>Rediseñando la manera de invertir tu patrimonio.</p>
            <Button className='buttons-home' onClick={() => { this.redirectProducts() }}>Ver mas <Image src={Arrw} style={{ width: 18, marginLeft: 5, marginTop: -3 }} /></Button>
          </div>
        </div>
      </div>

    );
  }
}
export default BackgroundPrincipalIndex;
