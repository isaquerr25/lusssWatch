import React from 'react';

import frenchIcon from '../../img/icone/french.png';
class Langue extends React.Component {
	render() {
		return (
			<div className='langue-button-div'>
				<button
					className='btn btn-link langue-button'
					onClick={this.props.handleChange}
					value='fr'
				>
					fr
				</button>
				<button
					className='btn btn-link langue-button'
					onClick={this.props.handleChange}
					value='en'
				>
					en
				</button>
			</div>
		);
	}
}

export default Langue;
