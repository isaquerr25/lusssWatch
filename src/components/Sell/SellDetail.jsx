import { Component } from "react";
import { withTranslation } from 'react-i18next';
import TooltipPerso from '../Global/TooltipPerso'
import img2 from '../../img/vente/sell.jpeg'


// ICONES
import formulaireIcon from '../../img/icone/formIcon.jpeg'
import boxIcon from '../../img/icone/boxIcon.jpeg'
import money from '../../img/icone/money.jpeg'
import argent from '../../img/icone/argent.jpeg'
import { Card } from "react-bootstrap";




class SellDetail extends Component {
    state = {}
    render() {

        const t = this.props.t
        const iconWidth = "60px"
        return (
            <div className="contactInfo">
                <img

                    src='https://verygoodlord.com/wp-content/uploads/2014/07/top-10-Montre-homme-mythique-luxe.jpg'
                    alt="échange de montres"
                    style={{
                        paddingBottom: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                />
                <Card>
                    <br />
                    <div className="box" >
                        <div className="icon">
                            <img src={formulaireIcon} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>{t("sell-step-1")}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-1-tooltip')}
                                />
                            </h5>
                            <p>
                                {t('sell-step-1-texte')}
                            </p>
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
                                {t('sell-step-2')}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-2-tooltip')}
                                />
                            </h5>
                            <p>
                                {t('sell-step-2-texte')}
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="box">
                        <div className="icon">
                            <img src={boxIcon} alt="icones" width={iconWidth} />
                            <i className="fad fa-long-arrow-alt-down arrow-down-icon"></i>
                        </div>
                        <div className="text">
                            <h5>
                                {t("sell-step-3")}&nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-3-tooltip')}
                                />
                            </h5>
                            <p>{t('sell-step-3-texte')}</p>
                        </div>
                    </div>
                    <br />
                    <div className="box">
                        <div className="icon">
                            <img src={argent} alt="icones" width={iconWidth} />
                        </div>
                        <div className="text">
                            <h5>
                                {t('sell-step-4')}
                                &nbsp;
                                <TooltipPerso
                                    abrevation={<i className="fal fa-info-circle infoIconSize" />}
                                    traduction={t('sell-step-4-tooltip')}
                                />
                            </h5>
                            <p>{t('sell-step-4-texte')}
                            </p>
                        </div>
                    </div>
                    <br />
                    <p style={{textAlign: "center", fontStyle:"italic"}}>{t('authentic-watch')}</p>
                </Card>
                <br /><br />
                <img
                    src={img2}
                    alt="serrage de main, deal"
                    style={{
                        paddingBottom: "40px",
                        paddingTop: "40px",
                        width: "100%",
                        height: "auto",
                        margin: "auto"
                    }}
                />
            </div >

        );
    }
}

export default withTranslation()(SellDetail);