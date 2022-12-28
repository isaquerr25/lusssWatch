import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'
import { Card } from "react-bootstrap";
import '../css/TradeDetail.css'


// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import watchIcon from '../../img/icone/watchIcon.jpeg'
import searchIcon from '../../img/icone/searchIcon.jpeg'
import colisIcon from '../../img/icone/colisIcon.jpeg'
import zenithMontre from '../../img/echange/11.jpeg'
import ExternaLinks from "../../utils/socialMedia";




class TradeDetail extends Component {
    state = {}
    render() {
        const t = this.props.t
        const iconWidth = "60px"
        return (
            <div className="contactInfo">
                <img alt="montre" src={zenithMontre}
                    style={{
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }} />
                <Card>
                    <br />
                    <div className="box" >
                        <div className="icon">
                            <img src={formulaireIcon} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon info"></i>
                        </div>
                        <div className="text">
                            <h5>{t("sell-step-1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-1-tooltip')}
                                />
                            </h5>
                            <p>{t('sell-step-1-texte')}</p>
                        </div>
                    </div>
                    <br />
                    <div className="box" >
                        <div className="icon">
                            <img src={money} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                {t("sell-step-2")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-2-tooltip')}
                                />
                            </h5>
                            <p>{t("sell-step-2-texte")}</p>
                        </div>
                    </div>
                    <br />
                    <div className="box">
                        <div className="icon">
                            <img src={searchIcon} alt="icones" width={iconWidth} />
                            <img src={watchIcon} alt="icones" width="20px" />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                {t('trade-step-3')}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('trade-step-3-tooltip')}
                                />
                            </h5>
                            <a href={ExternaLinks.chrono24} target='blank'>Chrono24</a>
                        </div>
                    </div>
                    <br />
                    <div className="box">
                        <div className="icon">
                            <img src={colisIcon} alt="icones" width={iconWidth} />
                        </div>
                        <div className="text">
                            <h5>{t('trade-step-4')}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-4-tooltip')}
                                />
                            </h5>
                            <p>{t('sell-step-3-texte')}</p>
                        </div>
                    </div>
                    <br />
                    <p style={{textAlign: "center", fontStyle:"italic"}}>{t('authentic-watch')}</p>
                </Card>
                <img
                    style={{
                        paddingTop: "80px",
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                    src="https://www.europeenne-de-conseil.com/wp-content/uploads/2019/02/eviter-un-proces-en-signant-une-transaction-k4_13522933.jpg"
                    alt="serrage de main, deal"
                />

            </div >

        );
    }
}

export default withTranslation()(TradeDetail);