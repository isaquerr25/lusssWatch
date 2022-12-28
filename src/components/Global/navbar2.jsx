import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';
// import watch from '../../img/watch.png'
import '../css/navbar.css';
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import i18n from '../../i18n';
import NavbarMobile from './NavbarMobile';
import logo2 from '../../img/logo2.png';
import Langue from './Langue';
import { Link } from 'react-router-dom';

class Navbar5 extends Component {
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
			<div>
				<NavbarMobile />
				<div className='sticky-top big-screen-nav'>
					<div className='logo-nav-div'>
						<span className='logo-police'>
							<Nav.Link href='/'>
								<img className='main-logo' src={logo2} alt='logo watch' />
							</Nav.Link>
						</span>
						<span className='my-logo-police'>WatchMarketClub</span>
						<span className='tel-header'>
							<i className='fas fa-phone' />
							<a className='tel-in-nav' href='tel:+351913913329725'>
								&nbsp;(+351) 913 329 725
							</a>
						</span>
					</div>
					<Navbar className='my-navbar' expand='sm'>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
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
						</Navbar.Collapse>
						<Langue handleChange={this.handleChange} />
					</Navbar>
				</div>
			</div>
		);
	}
}

export default withTranslation()(withRouter(Navbar5));
