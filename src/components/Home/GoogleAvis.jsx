import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import '../css/GoogleAvis.css'
import { Image, Row, Col } from 'react-bootstrap'

class GoogleAvis extends Component {
    state = {}
    render() {
        return (
            <div className="avis-container">
                <div className="container container-edge" style={{padding:".3em"}}>
                    <Row className="row text-center">
                        <Col className="col-4 trust_logo">
                            <picture>
                                <Image srcSet="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_trustpilot_v6-2018-2018-08-08-02-09-20-817.png;quality=90;h=26, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/icn_trustpilot_v6-2018-2018-08-08-02-09-20-817.png;quality=55;h=52 2x" alt="Trustpilot" fluid/>
                            </picture>
                        </Col>
                        <div className="col-4 trust_rating">
                            <picture>
                                <Image srcSet="https://images.watchfinder.co.uk/images/watchfinderimages/media/views/trustpilot_5stars-2019-01-07-05-16-01-986.png;quality=90;h=25, https://images.watchfinder.co.uk/images/watchfinderimages/media/views/trustpilot_5stars-2019-01-07-05-16-01-986.png;quality=55;h=50 2x" alt="Trustpilot" fluid/>
                            </picture>
                        </div>
                        <div className="col-4 trust_reviews ellipsis">
                            <b style={{color:"white"}}>600 avis</b> 
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withTranslation()(GoogleAvis);