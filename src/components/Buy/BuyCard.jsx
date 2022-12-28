import { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import Chrono24 from './Chrono24';
import '../css/BuyCard.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import achatCard from '../../img/achat/achatCard.jpeg';
import ExternaLinks from '../../utils/socialMedia.jsx';

class BuyCard extends Component {
	state = {};
	render() {
		const t = this.props.t;
		return (
			<Container>
				<div className='card col-md-12 p-3 my-horizontal-card'>
					<div className='row '>
						<div className='col-md-4'>
							<img className='img-fluid' alt='montre' src={achatCard} />
						</div>
						<div className='col-md-8'>
							<div className='card-block'>
								<br />
								<Card.Title>
									{/* <h4>{t('carousel-slide-2')}</h4> */}
								</Card.Title>
								<br />
								<Card.Text>{t('achat-card-1-texte')}</Card.Text>
								<br />
								<Card.Text>
									{t('achat-card-1-texte-2')}
									<a href='https://www.chrono24.fr/about-us.htm' target='blank'>
										{t('achat-card-1-texte-3')}
									</a>
									&nbsp;{t('achat-card-1-texte-4')}
								</Card.Text>
								<br />
								<img
									className='protection-achat-img'
									src='https://static.chrono24.com/images/default/icons/stage-buyers-protection.svg'
									alt='achat potection chono24'
								/>
								<br />
								<br />
								<Card.Text>
									{t('achat-card-1-texte-5')} &nbsp;
									<OverlayTrigger
										overlay={
											<Tooltip id='tooltip-disabled'>
												{t('achat-card-1-texte-5-tooltip')}
											</Tooltip>
										}
									>
										<span
											className='d-inline-block'
											style={{
												color: 'var(--vert-color)',
												fontWeight: '900',
											}}
										>
											<i className='fal fa-info-circle' />
										</span>
									</OverlayTrigger>
								</Card.Text>
								<br />
								<a href={ExternaLinks.chrono24} target='blank'>
									<Card.Text
										style={{
											textAlign: 'center',
											textDecoration: 'underline',
											fontSize: '1.2em',
										}}
									>
										{t('achat-card-1-texte-6')}
									</Card.Text>
								</a>
								<br />
								<Chrono24 />
								<br />
							</div>
						</div>
					</div>
				</div>
			</Container>
		);
	}
}

export default withTranslation()(BuyCard);
