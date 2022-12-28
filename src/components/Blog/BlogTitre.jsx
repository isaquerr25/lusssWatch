import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import TitreCard from '../Global/TitreCard';

class BlogTitre extends Component {
	state = {};
	render() {
		// const t = this.props.t
		return (
			<div>
				<TitreCard titre={'Blog'} />
			</div>
		);
	}
}

export default withTranslation()(BlogTitre);
