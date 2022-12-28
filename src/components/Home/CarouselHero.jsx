import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "../css/CarouselHero.css"
import { withTranslation } from 'react-i18next';
import slide2 from '../../img/slide/slide2.jpeg'
import slide3 from '../../img/slide/slide3.jpeg'
import slide5 from '../../img/slide/service1.jpeg'
import trade from '../../img/slide/trade.jpeg'

import GoogleAvis from './GoogleAvis';
import Collection from '../../img/carousel/collection.jpg'





class CarouselHero extends Component {
    render() {
        const t = this.props.t
        return (
            <div className="carousel-div">
                <Carousel className="carousel-hero" variant="dark">
                    {/* intro */}
                    <Carousel.Item>
                        <a href="/sell-your-watch"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={Collection}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t("carousel-slide-1")}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Achat */}
                    <Carousel.Item>
                        <a href="/buy"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={slide2}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t("carousel-slide-2")}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* vente */}
                    <Carousel.Item>
                        <a href="/sell"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={slide3}
                            alt="Second slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t("carousel-slide-3")}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Echange */}
                    <Carousel.Item>
                        <a href="/sell"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={trade}
                            alt="Second slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('carousel-slide-4')}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    {/* Service */}
                    <Carousel.Item>
                        <a href="service"><img
                            fluid
                            className="d-block w-100 img-carousel"
                            src={slide5}
                            alt="Fourth slide"
                        /></a>
                        <Carousel.Caption>
                            <h4 className="goldText">{t('carousel-slide-5')}</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <GoogleAvis/>
            </div>

        )
    }
}
export default withTranslation()(CarouselHero)