import React, { Component } from 'react';
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
        <p>Pantalla de contacto</p>
      </div>
    );
  }
}
export default ContactIndex;
