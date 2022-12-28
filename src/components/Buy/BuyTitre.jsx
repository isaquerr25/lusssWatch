
import { OverlayTrigger, Tooltip, Card } from "react-bootstrap";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class BuyTitre extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <Card >
                <div className="title-div">
                    <div className="title-setting">
                        <h1 className="my-police-titre">{t('carousel-slide-2')}</h1>
                        <br />
                        <h5>
                            {t('achat-bandeau-texte')}
                        </h5>
                        <h5>
                            {t('achat-bandeau-texte-2')}&nbsp;
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-disabled">
                                        {t('achat-bandeau-tooltip')}
                                    </Tooltip>
                                }>
                                <span className="d-inline-block"
                                    style={{
                                        color: "var(--vert-color)",
                                        fontWeight: "900"
                                    }}
                                >
                                    <i className="fal fa-info-circle" />
                                </span>
                            </OverlayTrigger>
                        </h5>
                        <br />
                        <h3 style={{ fontWeight: "bold", color: "black !impoortant", }} className="my-link-titre-card">
                            <a className="titre-link" href="/sell"> {this.props.cardText2}</a>
                        </h3>
                        <br />
                    </div>

                </div>
            </Card>
        );
    }
}

export default withTranslation()(BuyTitre);