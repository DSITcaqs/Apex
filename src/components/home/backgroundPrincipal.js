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

            <p className='title-home-container-principal'>BIENVENIDO A </p>
            <p className='text-description-container-principal'>APEX</p>
            <p className='subtext-description-container-principal'>Creación de riqueza rediseñada</p>
            <Button className='buttons-home' onClick={() => { this.redirectProducts() }}>Ver mas <Image src={Arrw} style={{ width: 18, marginLeft: 5, marginTop: -3 }} /></Button>
            {/*<p className='title-home-container-principal'>Creación de riqueza rediseñada.</p>
            <p className='text-description-container-principal'>
              APEX FUNDS GROUP pretende ser una compañía líder en manejo de capital, que contribuye a un panorama de inversión más justo para México y para todo américa latina.
            </p>
            <Button className='buttons-home'>Unete al Grupo</Button>
            <Button className='buttons-home'>Más Información</Button>*/}
          </div>
        </div>
      </div>
    );
  }
}
export default BackgroundPrincipalIndex;