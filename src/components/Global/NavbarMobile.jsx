import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
// import watch from '../../img/watch.png'
import '../css/navbar.css';
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import i18n from '../../i18n';
import '../css/NavBarMobile.css';
import logo2 from '../../img/logo2.png';
import Langue from './Langue';
import { Link } from 'react-router-dom';

class NavbarMobile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
		i18n.changeLanguage(event.target.value);
	}
	activeLink(link) {
		const currentUrl = this.props.location.pathname;
		const nowUrl = currentUrl === link ? 'active' : '';
		return nowUrl;
	}
	render() {
		const t = this.props.t;
		return (
			<div className='my-mobile-nav'>
				<div className='sticky-top'>
					<div className='logo-nav-div'>
						<span className='logo-police'>
							<Nav.Link href='/'>
								<img className='main-logo' src={logo2} alt='logo watch' />
							</Nav.Link>
						</span>
						<span className='tel-header' style={{ fontSize: '18px' }}>
							<a className='link-email' href='tel:+351913913329725'>
								<i className='fas fa-phone' />
								(+351)913 329 725
							</a>
						</span>
					</div>
					<div className='wmc-navbar my-police-titre'>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Watch Market Club{' '}
						<Langue handleChange={this.handleChange} />
					</div>
					<Navbar className='my-navbar'>
						<Nav className='mr-auto navbar-nav'>
							<Link to={'/'} className={`nav-link ${this.activeLink('/')}`}>
								{t('navbar-home')}
							</Link>
							<Link
								to={'/buy'}
								className={`nav-link ${this.activeLink('/buy')}`}
							>
								{t('buy')}
							</Link>
							<Link
								to={'/sell'}
								className={`nav-link ${this.activeLink('/sell')}`}
							>
								{t('sell')}
							</Link>
							<Link
								to={'/trade'}
								className={`nav-link ${this.activeLink('/trade')}`}
							>
								{t('navbar-trade')}
							</Link>
							<Link
								to={'/service'}
								className={`nav-link ${this.activeLink('/service')}`}
							>
								{t('service')}
							</Link>
							<Link
								to={'/blog'}
								className={`nav-link ${this.activeLink('/blog')}`}
							>
								{t('navbar-blog')}
							</Link>
						</Nav>
						{/* <div className="tel-header">
                            <select value={this.state.value} onChange={this.handleChange} className="select-lang">
                                <option value="fr">
                                    🇫🇷
                                </option>
                                <option value="en">
                                    🇬🇧
                                </option>
                            </select>
                        </div> */}
					</Navbar>
				</div>
			</div>
		);
	}
}

export default withTranslation()(withRouter(NavbarMobile));
