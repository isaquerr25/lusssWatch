import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../css/CardHorizontal.css';
import englishIcon from '../../img/icone/english.png';
import frenchIcon from '../../img/icone/french.png';

class CardHorizontal extends Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					{/* French PART */}
					<div className='d-flex justify-content-center align-items-center language-flag p-5'>
						<img width='30px' src={frenchIcon} alt='drapeaux français'></img>
						&nbsp;<h2 style={{ margin: '0' }}>FRANÇAIS</h2>
					</div>

					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title text-right'>
										Le vocabulaire horloger par Frank Sans C:{' '}
									</h4>
									<a
										href='https://www.youtube.com/embed/b58ViTgZQNI'
										target='blank'
									>
										Youtube
									</a>
								</div>
								<br />
							</div>
							<div className='col-md-4'>
								<iframe
									className='video-toutube'
									src='https://www.youtube.com/embed/b58ViTgZQNI'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-4'>
								<img
									className='w-100'
									alt='montre'
									src='https://cdn-s-www.republicain-lorrain.fr/images/B82DB28C-1BFE-4855-B8E5-D2BF0956F5E3/NW_raw/le-mouvement-el-primero-qui-a-fait-la-legende-de-l-horloger-zenith-photo-zenith-1578043917.jpg'
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title text-right'>
										{' '}
										Mieux connaître l horlogerie
									</h4>
									<a
										href='https://www.fhs.swiss/fre/knowledge.html'
										target='blank'
									>
										fhs.swiss
									</a>
								</div>
								<br />
							</div>
						</div>
					</div>
					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title'>Montres d'aviation</h4>
									<div className='my-flex-column'>
										<a
											href='https://www.chrono24.fr/magazine/la-grande-histoire-des-montres-daviateur-p_18424/'
											target='blank'
										>
											Article Chrono24
										</a>
									</div>
								</div>
								<br />
							</div>
							<div className='col-md-4'>
								<img
									className='w-100'
									alt='montre'
									src='https://pbs.twimg.com/media/Ewx1m3jWgAsEjOU.jpg'
								/>
							</div>
						</div>
					</div>
					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-4'>
								<img
									className='w-100'
									alt='montre'
									src='https://www.hautehorlogerie.org/fileadmin/logo_fhh.png'
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title text-right'>
										Fondation de haute horlogerie
									</h4>
									<a
										href='https://journal.hautehorlogerie.org/fr/category/actualites/'
										target='blank'
									>
										La Fondation de Haute Horlogerie
									</a>
								</div>
								<br />
							</div>
						</div>
					</div>
					{/* ENGLISH PART */}
					<div className='d-flex justify-content-center align-items-center p-5 language-flag'>
						<img width='30px' src={englishIcon} alt='drapeaux anglais'></img>
						&nbsp;<h2 style={{ margin: '0' }}>ENGLISH</h2>
					</div>

					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title text-right'>
										Kevin O'Leary Interview: Debating Watches as Investments,
										Discussing the Industry & His Collection
									</h4>
									<a
										href='https://www.youtube.com/embed/KPnPPd2O_0w'
										target='blank'
									>
										Youtube
									</a>
								</div>
								<br />
							</div>
							<div className='col-md-4'>
								<iframe
									className='video-toutube'
									src='https://www.youtube.com/embed/KPnPPd2O_0w'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-4'>
								<img
									className='w-100'
									alt='montre'
									src='https://static.mensup.fr/photo_bdm/11590/0-BDM-11590-jaeger-lecoultre-duometre-unique-travel-time-en-or-rose.jpg'
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title text-right'>Watch dictionnary</h4>
									<a
										href='https://www.fhs.swiss/eng/knowledge.html'
										target='blank'
									>
										Watch dictionnary
									</a>
								</div>
								<br />
							</div>
						</div>
					</div>
					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title'>Pilot Watches</h4>
									<div className='my-flex-column'>
										<a
											href='https://www.chrono24.com/magazine/history-of-pilots-watches-p_8889/'
											target='blank'
										>
											Chrono24 article
										</a>
									</div>
								</div>
								<br />
							</div>
							<div className='col-md-4'>
								<img
									className='w-100'
									alt='montre'
									src='https://secure-journal.hautehorlogerie.org/wp-content/uploads/2018/12/IWC-Grande-Montre-dAviateur-Calendrier-Annuel-Edition-150-ans.jpg'
								/>
							</div>
						</div>
					</div>
					<div className='card col-md-12 p-3 my-horizontal-card'>
						<div className='row '>
							<div className='col-md-4'>
								<img
									className='w-100'
									alt='montre'
									src='https://www.hautehorlogerie.org/fileadmin/logo_fhh.png'
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-block'>
									<h4 className='card-title text-right'>
										Haute Horlogerie Foundation
									</h4>
									<a
										href='https://journal.hautehorlogerie.org/en/category/news/'
										target='blank'
									>
										Haute Horlogerie Foundation
									</a>
								</div>
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withTranslation()(CardHorizontal);
