import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class BackgroundPrincipalIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='full-width-image'>
        <div className='container-row-center'>
          <div className='container-info'>
            <p className='title-home-container-principal'>Creación de riqueza rediseñada.</p>
            <p className='text-description-container-principal'>
              APEX FUNDS GROUP pretende ser una compañía líder en manejo de capital, que contribuye a un panorama de inversión más justo para México y para todo américa latina.
            </p>
            <Button className='buttons-home'>Unete al Grupo</Button>
            <Button className='buttons-home'>Más Información</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default BackgroundPrincipalIndex;