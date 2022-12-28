import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import BlogTitre from '../components/Blog/BlogTitre';
import CardHorizontal from '../components/Blog/CardHorizontal.jsx';
import BrandContainer from '../components/Global/BrandContainer';
import LogoContainer from '../components/Global/LogoContainer';
import Parralax from '../components/Home/Parralax';
import JumbotronImage from '../components/Sell/JumbotronImage';
import { arrayOfImages } from '../utils/WatchImgUrl';

class Blog extends Component {
	render() {
		var randomItem =
			arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
		const imgUrl = randomItem;
		return (
			<div>
				<JumbotronImage imgSrc='https://www.time4diamonds.com/wp/wp-content/uploads/2020/10/5.jpg' />
				<BlogTitre />
				<CardHorizontal />
				<br />
				<Parralax imgUrl={imgUrl} />
				<BrandContainer />
				<LogoContainer />
			</div>
		);
	}
}

export default withTranslation()(Blog);
