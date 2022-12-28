import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';

import { arrayOfImages } from '../utils/WatchImgUrl';
import Parralax from '../components/Home/Parralax';
import BrandContainer from '../components/Global/BrandContainer';
import LogoContainer from '../components/Global/LogoContainer';
import ServiceGlobal from '../components/Service/ServiceGloball';


class Service extends Component {
  render() {
    var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    const imgUrl = randomItem
    return (
      <div>
        <JumbotronImage imgSrc="https://www.audemarspiguet.com/content/dam/ap/com/services/caring/setting-time-date.jpg.transform.apfw.jpg"/>
        <ServiceGlobal/>
        <br/>
        <Parralax imgUrl={imgUrl} />
        <BrandContainer />
        <LogoContainer/>
      </div>
    );
  }
}

export default withTranslation()(Service);