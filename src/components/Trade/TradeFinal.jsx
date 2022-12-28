import React, { Component } from 'react';
import '../css/FormSell.css'
import { withTranslation } from 'react-i18next';
import TradeDetail from './TradeDetail';
import vesteVerte from '../../img/echange/3.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css'
import FormGloball from '../Global/FormGloball';






class TradeFinal extends Component {


    render() {

        // const t = this.props.t
        return (
            <section className="contact">

                <div className="container-contact">
                    {/* container on left */}
                    <TradeDetail />
                    {/* container on right */}
                    <div className="contactform card" style={{ padding: "20px", margin: "20px" }}>
                        <img alt="montre" src={vesteVerte} className="card-img-top" style={{ padding: "20px" }} />
                        <div style={{ margin: "20px" }}>
                            <FormGloball wantModel={true} formFrom={"Trade"} />
                        </div>
                    </div>
                </div>
            </section>


        )
    }

}
export default withTranslation()(TradeFinal)