import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../components/Global/TitreCard';
import JumbotronImage from '../components/Sell/JumbotronImage';

import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import echangeImg from '../img/echange/1.jpeg'
import LogoContainer from '../components/Global/LogoContainer';
import TradeFinal from '../components/Trade/TradeFinal';


class Trade extends Component {
    state = {}
    render() {

        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem
        const t = this.props.t
        return (
            <div>
                <JumbotronImage imgSrc={echangeImg} />
                <TitreCard
                    titre={t('trade-bandeau-title')}
                    cardText={t('trade-bandeau-texte')}
                    cardTextPart2={t('trade-bandeau-texte-2')}
                />
                <TradeFinal/>
                <Parralax imgUrl={imgUrl} />
                <BrandContainer />
                <LogoContainer/>
            </div>
        );
    }
}

export default withTranslation()(Trade);