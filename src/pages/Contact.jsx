import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import JumbotronImage from '../components/Sell/JumbotronImage';
import ContactForm from '../components/Contact/ContactForm';
import Parralax from '../components/Home/Parralax';
import { arrayOfImages } from '../utils/WatchImgUrl';
import BrandContainer from '../components/Global/BrandContainer';
import LogoContainer from '../components/Global/LogoContainer';





class Contact extends Component {

    render() {

        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem
        const imgSrc = "https://hodinkee.imgix.net/uploads/images/bcd1cea4-58d3-4412-9800-8d4b1cfa269a/Audemars-piguet-royal-oak-offshore-diver-4.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&ch=Width%2CDPR%2CSave-Data&fit=crop&w=1200"
        return (
            <div>
                <JumbotronImage imgSrc={imgSrc} />
                <div style={{paddingBottom: '100px', paddingTop: '100px'}}><ContactForm /></div>
                {/* <SocialMedia /> */}
                <Parralax imgUrl={imgUrl} alt="Breguet" />
                <BrandContainer/>
                <LogoContainer/>
            </div>
        );
    }
}

export default withTranslation()(Contact);