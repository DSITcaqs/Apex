import React, { Component } from 'react';
import NavbarComponent from '../navbar';
import SectionOne from './section1';
import CardsComponent from './cardsInfo';
import BackgroundPrincipalComponent from './backgroundPrincipal';
import Footer from '../footer';

//CQ:
import ProductosSimples from './productos_simple';
import WhyApex from './whyApex';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavbarComponent active={this.state.expanded} data={this.props.data} />
        <BackgroundPrincipalComponent data={this.props.data} />
        <CardsComponent data={this.props.data} />
        <ProductosSimples />
        <SectionOne />
        {/*<CarouselComponent />*/}
        {/*<Brokrage />*/}
        {/*<BannerIndex />*/}
        <WhyApex />

        <Footer />
      </div>
    );
  }
}
export default HomeIndex;
