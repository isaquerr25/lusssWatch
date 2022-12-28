import React, { Component } from 'react';
import "../css/CardLine.css"
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Image
import boxAchat from '../../img/home/boxAchat.jpeg'
import boxEchange from '../../img/home/boxEchange.jpeg'
import boxService from '../../img/home/boxService.jpeg'
import boxVente from '../../img/home/boxVente.jpeg'

class CardLine extends Component {

    render() {

        const t = this.props.t
        return (
            <div className="container card-line-container">
                <section className="container mt-5 mb-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {/* ACHAT */}
                        <div className="col card-shadow">
                            <div className="card h-100">
                                <img src={boxAchat} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t("home-card-achat-title")}</h5>
                                    <p className="card-text">
                                        {t("home-card-achat-texte")}
                                    </p>
                                    <p><Link to={'/buy'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        {/* VENTE */}
                        <div className="col card-shadow">
                            <div className="card h-100">
                                <img src={boxVente} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{t("home-card-sell-title")}</h5>
                                    <p className="card-text">{t("home-card-sell-texte")}</p>
                                    <p><Link to={'/sell'} className="active cardLink">{t("card-more-info")}</Link></p>
                                </div>
                            </div>
                        </div>
                        {/* ECHANGE */}
                        <div className="col card-shadow">
                            <div className="card h-100">
                                <img src={boxEchange} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {t('home-card-trade-title')}
                                    </h5>
                                    <p className="card-text">
                                        {t('home-card-trade-texte')}
                                    </p>
                                    <p>
                                        <Link to={'/trade'} className="active cardLink">
                                            {t("card-more-info")}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* SERVICE */}
                        <div className="col card-shadow">
                            <div className="card h-100">
                                <img src={boxService} className="card-img-top img-from-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {t('home-card-service-title')}
                                    </h5>
                                    <p className="card-text">
                                       {t('home-card-service-texte')}
                                    </p>
                                    <p>
                                        <Link to={'/service'} className="active cardLink">
                                            {t("card-more-info")}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
export default withTranslation()(CardLine);

