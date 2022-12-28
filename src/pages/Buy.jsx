import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import BuyCard from '../components/Buy/BuyCard';
import BuyCard2 from '../components/Buy/BuyCard2';
import BuyTitre from '../components/Buy/BuyTitre';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import achatjumbo from '../img/achat/achatjumbo.jpeg'
import LogoContainer from '../components/Global/LogoContainer';




class Buy extends Component {
  render() {


    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (

      <div>
        <JumbotronImage imgSrc={achatjumbo}/>
        <BuyTitre />
        <BuyCard />
        <BuyCard2 />
        <br/>
        <Parralax imgUrl={imgUrl} />
        <BrandContainer/>
        <LogoContainer/>
      </div>
    );
  }
}

export default withTranslation()(Buy);