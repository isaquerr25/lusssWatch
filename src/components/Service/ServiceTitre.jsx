
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Card } from "react-bootstrap";
import '../css/TitreCard.css'


class ServiceTitre extends Component {
    state = {}
    render() {
        const t = this.props.t
        return (
            <div>
                <Card >
                    <div className="title-div">
                        <div>
                            <h1 className="my-police-titre">
                                Service
                            </h1>
                            <br/>
                            <h4 style={{ color: "#616A6B", fontStyle: "italic" }}>Calibre | Caliber | キャリバー | 机芯号 :</h4>
                            <h5 style={{ color: "#616A6B", fontStyle: "italic" }} className="card-text text-justify">
                               {t('service-bandeau-texte')}
                            </h5>
                            <br />
                        </div>

                    </div>
                </Card>
            </div>
        );
    }
}

export default withTranslation()(ServiceTitre);