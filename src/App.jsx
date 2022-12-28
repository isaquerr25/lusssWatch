import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Service from './pages/Service';
import Navbar from './components/Global/navbar2';
import Footer from './components/Global/Footer';
import Trade from './pages/Trade';
import ContactService from './pages/ContactService';
import GeneralConditions from './components/Global/GeneralConditions';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';

class App extends Component {
	render() {
		return (
			<Router>
				<ToastContainer />
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/contact-service' component={ContactService} />
					<Route path='/blog' component={Blog} />
					<Route path='/buy' component={Buy} />
					<Route path='/sell' component={Sell} />
					<Route path='/service' component={Service} />
					<Route path='/trade' component={Trade} />

					<Route path='/condition-generale' component={GeneralConditions} />
				</Switch>
				<Footer />
				<div className='w-[100vw] bg-[black] h-[10rem] flex justify-center items-center  '>
					<div
						className={`
            cursor-pointer transition duration-150 ease-out hover:ease-in text-lg lg:text-[2.5rem] 
          text-[#00F0FF] font-[800] hover:sepia-[hue-rotate(53deg)]
          `}
						onClick={() =>
							(window.location.href =
								'https://www.linkedin.com/in/isaque-ferreira-20007b165/')
						}
					>
						<text
							className={`
              transition duration-150 ease-out hover:ease-in text-lg lg:text-[2.5rem] 
          text-[#00F0FF] font-[800] hover:sepia-[hue-rotate(53deg)] text-center mx-[auto] flex flex-col xl:flex-row justify-center items-center gap-x-[1rem]
          `}
						>
							<span className=' whitespace-nowrap'>
								<text className='text-[#C5EE20]' color='#C5EE20'>
									#
								</text>
								😊 CONTACT DEVELOPER{' '}
							</span>{' '}
							<span className=' whitespace-nowrap'>
								{' '}
								THIS WEB SITE 🙂
								<text className='text-[#C5EE20]'>#</text>
							</span>
						</text>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
