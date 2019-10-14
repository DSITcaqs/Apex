import React, { Component } from 'react';
import NavbarComponent from '../navbar';
import SectionOne from './section1';
import BannerIndex from './banner';
import CarouselComponent from './carousel';
import CardsComponent from './cardsInfo';
import BackgroundPrincipalComponent from './backgroundPrincipal';
import Brokrage from './brokrage';
import Footer from '../footer';

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
        <SectionOne />
        {/*<CarouselComponent />*/}
        <Brokrage />
        <BannerIndex />
        <CardsComponent data={this.props.data} />
        <Footer />
      </div>
    );
  }
}
export default HomeIndex;
