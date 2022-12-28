import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import SellGlobal from '../components/Sell/SellGlobal'
import JumbotronImage from '../components/Sell/JumbotronImage';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import venteDjumbo from '../img/vente/ventejumbo.jpeg'
import LogoContainer from '../components/Global/LogoContainer';




class Achat extends Component {
  render() {
    const imageSource = venteDjumbo
    var randomItem = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc={imageSource} />
        <SellGlobal />
        
        <Parralax imgUrl={imgUrl}/>
        <BrandContainer/>
        <LogoContainer/>
      </div>
    );
  }
}

export default withTranslation()(Achat);