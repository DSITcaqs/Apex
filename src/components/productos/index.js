import React, { Component } from 'react';
import NavbarComponent from '../navbar';

class ProductosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} />
        <p>Pantalla de productos</p>
      </div>
    );
  }
}
export default ProductosIndex;
