import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
import { withTranslation } from 'react-i18next';

import ExternaLinks from '../../utils/socialMedia.jsx';
import logo from '../../img/logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			validEmail: true,
		};
		this.handleEmailInputFooter = this.handleEmailInputFooter.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	getYear() {
		return new Date().getFullYear();
	}
	handleClick(e) {
		e.preventDefault();
		this.sendEmail();
	}
	sendEmail() {
		let that = this;
		emailjs
			.sendForm(
				'service_jklklpo',
				'template_nrwxgzo',
				'#my-form-newsletter',
				'user_qVW1EQYpGrCCZBiy6lnqy'
			)
			.then(function (response) {
				console.log(response.status, response.text);
				if (response.status === 200) {
					that.resetInput();
					that.notify();
				} else {
					that.resetInput();
					that.notifyError();
				}
			});
	}
	resetInput() {
		this.setState({
			email: '',
			validEmail: true,
		});
	}
	handleEmailInputFooter(e) {
		e.preventDefault();
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (regex.test(e.target.value)) {
			this.setState({ validEmail: true });
		} else {
			this.setState({ validEmail: false });
		}
		this.setState({
			email: e.target.value,
		});
	}
	notify = () =>
		toast.success('Inscription à la newsletter confirmé', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	notifyError = () =>
		toast.error('Problème, demande non prise en compte', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	render() {
		const t = this.props.t;
		const isValidEmail = this.state.validEmail;
		return (
			<footer className='footer-section footer mt-auto'>
				<div className='container'>
					<div className='footer-cta pt-3 pb-5'>
						<div className='row row1-footer'>
							<div className='col-xl-4 col-md-4 mb-30'>
								<div className='single-cta'>
									<img src={logo} height='150px' alt='watch market club logo' />
								</div>
							</div>
							<div className='col-xl-4 col-md-4 mb-30'>
								<div className='single-cta'>
									<div className='cta-text'>
										<a
											className='link-email'
											href='tel:isaqueribeiro964@gmail.com'
										>
											<span className='span-footer'>
												<i className='fas fa-phone row1-icon'></i>&nbsp;(+351)
												913 329 725
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className='col-xl-4 col-md-4 mb-30'>
								<div className='single-cta'>
									<div className='cta-text'>
										<a
											className='link-email'
											href='mailto:isaqueribeiro964@gmail.com'
										>
											<span className='span-footer'>
												{' '}
												<i className='far fa-envelope-open row1-icon'></i>
												&nbsp;isaqueribeiro964@gmail.com
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='footer-content pt-5 pb-5'>
						<div className='row'>
							<div className='col-xl-8 col-lg-8 mb-50 pt-2 pb-2'>
								<div className='footer-widget'>
									<div className='footer-social-icon'>
										<span>{t('footer-follow-us')}</span>
										<a
											href={ExternaLinks.facebook}
											target='_blank'
											rel='noreferrer'
										>
											<i className='fab fa-facebook-f facebook-bg'></i>
										</a>
										<a
											href={ExternaLinks.google}
											target='_blank'
											rel='noreferrer'
										>
											<i className='fab fa-google-plus-g google-bg'></i>
										</a>
										<a
											href={ExternaLinks.youtube}
											target='_blank'
											rel='noreferrer'
										>
											<i className='fab fa-youtube google-bg '></i>
										</a>
										<a
											href={ExternaLinks.instagram}
											target='_blank'
											rel='noreferrer'
										>
											<i className='fab fa-instagram instagram'></i>
										</a>
										<a
											href={ExternaLinks.linkedin}
											target='_blank'
											rel='noreferrer'
										>
											<i
												style={{ color: 'white' }}
												className='fab fa-linkedin facebook-bg'
											></i>
										</a>
										<a
											href={ExternaLinks.chrono24}
											target='_blank'
											rel='noreferrer'
										>
											<img
												style={{ borderRadius: '50%', height: '42px' }}
												src='https://play-lh.googleusercontent.com/xWvqbtU9fO6_yyJoblxvsp6-MtMRtWYgBuVRQ9JTKbERYLQ4Mk8znN0l_crr9RImTw=s180'
												alt='Chrono 24'
											/>
										</a>
									</div>
								</div>
							</div>
							<div className='col-xl-4 col-lg-4 col-md-6 mb-50 pt-2 pb-2'>
								<div className='footer-widget'>
									<div>
										<h3 className='newletter-inscription'>
											Newsletter inscription
										</h3>
									</div>
									<form id='my-form-newsletter' className='subscribe-form'>
										<input
											type='text'
											name='formName'
											required='required'
											value='Newsletter'
											style={{ display: 'none' }}
										/>
										<div>
											<input
												type='email'
												name='email'
												value={this.state.email}
												onChange={this.handleEmailInputFooter}
												placeholder={t('footer-placeholder-email')}
											/>
											<button onClick={this.handleClick}>
												<i
													className='fab fa-telegram-plane'
													disabled={isValidEmail ? '' : 'disabled'}
												></i>
											</button>
											{!isValidEmail && (
												<p className='inputValidator'>
													Valid email is required
												</p>
											)}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='copyright-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-4 col-lg-4  text-lg-left'>
								<div className='copyright-text'>
									<p>
										Copyright &copy; {this.getYear()},{' '}
										{t('footer-copyright-text')}{' '}
										<a href='https://www.linkedin.com/in/isaque-ferreira-20007b165/'>
											ReVoL
										</a>
									</p>
								</div>
							</div>
							<div className='col-xl-8 col-lg-8 d-none d-lg-block text-right'>
								<div className='footer-menu'>
									<ul>
										<li>
											<Link to={'/'} className='nav-link active'>
												{t('navbar-home')}
											</Link>
										</li>
										<li>
											<Link to={'/buy'} className='nav-link active'>
												{t('buy')}
											</Link>
										</li>
										<li>
											<Link to={'/sell'} className='nav-link active'>
												{t('sell')}
											</Link>
										</li>
										<li>
											<Link to={'/trade'} className='nav-link active'>
												{t('navbar-trade')}
											</Link>
										</li>
										<li>
											<Link to={'/service'} className='nav-link active'>
												{t('service')}
											</Link>
										</li>
										<li>
											<Link to={'/blog'} className='nav-link active'>
												{t('navbar-blog')}
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-4 col-lg-4  text-lg-left'>
							<div className='copyright-text'>
								<p className=''>
									<Link to='/condition-generale'>
										{t('condition-generale')}
									</Link>{' '}
									- R.C.S: 903 624 930
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default withTranslation()(Footer);
