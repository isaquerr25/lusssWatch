import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import CardLine from '../components/Home/CardLine'
import CarouselHero from '../components/Home/CarouselHero'
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import TitreCard from '../components/Global/TitreCard';
import BrandContainer from '../components/Global/BrandContainer';
import LogoContainer from '../components/Global/LogoContainer';








class Home extends Component {
  render() {
    const t = this.props.t

    var randomItem = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <CarouselHero />
        <TitreCard
                    titre={t("home-bandeau-titre")}
                    sousTitre={""}
                    cardText={t('home-bandeau-texte')}
                    cardText2={t('home-bandeau-texte-2')}
                />
        <CardLine />
        
        <Parralax imgUrl={imgUrl}/>
        <BrandContainer/>
        <LogoContainer/>
        
      </div>
    );
  }
}

export default withTranslation()(Home);

