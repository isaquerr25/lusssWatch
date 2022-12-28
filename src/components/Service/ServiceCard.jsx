import React, { Component } from 'react';
import TooltipPerso from '../Global/TooltipPerso.jsx';
import { Col, Row } from 'react-bootstrap';
import hologer from '../../img/serv.jpeg';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

class ServiceCard extends Component {
	render() {
		const t = this.props.t;
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='card col-md-12 p-3 my-horizontal-card'>
							<div className='row'>
								<div className='col-md-4'>
									<img className='w-100' alt='horloger' src={hologer} />
								</div>
								<div className='col-md-8'>
									<div className='card-block'>
										<h4 className='card-title'>{t('carousel-slide-5')}</h4>
										<div className='toto'>
											<br />
											<p className='card-text text-justify'>
												{t('service-card-texte')}
											</p>
											<br />
											<Row>
												<Col>
													<p>
														{t('service-1')}
														&nbsp;
														<TooltipPerso
															abrevation={<i className='fal fa-info-circle' />}
															traduction={t('service-1-tooltip')}
														/>
													</p>
													<p>
														{t('service-2')}
														&nbsp;
														<TooltipPerso
															abrevation={<i className='fal fa-info-circle' />}
															traduction={t('service-2-tooltip')}
														/>
													</p>

													<p>
														{t('service-autre')}
														&nbsp;
														<TooltipPerso
															abrevation={<i className='fal fa-info-circle' />}
															traduction={t('service-autre-tooltip')}
														/>
													</p>
												</Col>
												<Col>
													<p>
														{t('service-3')}
														&nbsp;
														<TooltipPerso
															abrevation={<i className='fal fa-info-circle' />}
															traduction={t('service-3-tooltip')}
														/>
													</p>

													<p>
														{t('service-polissage')}
														&nbsp;
														<TooltipPerso
															abrevation={<i className='fal fa-info-circle' />}
															traduction={t('service-polissage-tooltip')}
														/>
													</p>
												</Col>
											</Row>
										</div>
										<br />
										<Link to={'/contact-service'}>
											<p
												className='btn btn-success'
												style={{ backgroundColor: 'var(--vert-color)' }}
											>
												{t('contact-us')}
											</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withTranslation()(ServiceCard);
