import React, { Component } from 'react';
import NavbarComponent from '../navbar';

class NosotrosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} />
        <p>Pantalla de nostros</p>
      </div>
    );
  }
}
export default NosotrosIndex;
