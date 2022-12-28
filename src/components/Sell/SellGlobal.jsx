import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import SellDetail from './SellDetail';
import TitreCard from '../Global/TitreCard';
import FormGlobal from '../Global/FormGloball';


class FormSell extends Component {

    render() {
        const t = this.props.t
        return (
            <section className="contact">
                <TitreCard
                    titre={t('sell-bandeau-title')}

                    cardText={t('sell-bandeau-texte')}
                    cardTextPart2={t('sell-bandeau-texte-2')}
                />
                <div className="container-contact">
                    {/* container on left */}
                    <SellDetail />
                    {/* container on right */}
                    <div className="contactform card" style={{ margin: "12px" }}>
                        <FormGlobal wantModel={false} formFrom={"Sell"} />
                    </div>

                </div>
            </section>
        )
    }

}
export default withTranslation()(FormSell)