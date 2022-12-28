import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/LogoContainer.css'

//ICONES
import authentic from '../../img/iconeCo/authentic.jpeg'
import devis48H from '../../img/iconeCo/devis48H-1.jpeg'
import chrono24 from '../../img/iconeCo/chrono24seller.jpeg'
import expert from '../../img/iconeCo/expert.jpeg'
import expertise from '../../img/iconeCo/expertise.jpeg'
import FHHexpert from '../../img/iconeCo/FHHexperts.jpeg'
import freeShipping from '../../img/iconeCo/freeShipping.jpeg'
import question from '../../img/iconeCo/questions.jpeg'
import reviews from '../../img/iconeCo/reviews.jpeg'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

class LogoContainer extends Component {
    render() {
        return <div>
            <Container className="container-spacing logo-container">
                <div className="card card-logo">
                <Row className="justifyCenter align-items-center">
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Devis en <strong>48H</strong>
                                </Tooltip>
                            }
                        >
                            <img style={{marginLeft:"10px"}} src={devis48H} className="logoIcones" alt="icone" />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Des questions? Contactez nous!
                                </Tooltip>
                            }
                        >
                            <img src={question} className="logoIcones" alt="icone" />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Envoi gratuit
                                </Tooltip>
                            }
                        >
                            <img src={freeShipping} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Avis clients
                                </Tooltip>
                            }
                        >
                            <img src={reviews} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Trusted Seller
                                </Tooltip>
                            }
                        >
                            <img src={expert} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Montres certifiées 100%  authentiques
                                </Tooltip>
                            }
                        >
                            <img src={authentic} className="logoIcones" alt="icone" />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Protection des Acheteurs Chrono24
                                </Tooltip>
                            }
                        >
                            <img src={chrono24} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Estimation selon prix du marché
                                </Tooltip>
                            }
                        >
                            <img src={expertise} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                    <Col xs={2} md={1}>
                        <OverlayTrigger
                            key={'top'}
                            placement={'top'}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Experts certifiés FHH
                                </Tooltip>
                            }
                        >
                            <img src={FHHexpert} className="logoIcones" alt="icone" />
                        </OverlayTrigger>

                    </Col>
                </Row>
                </div>
            </Container>
        </div>;
    }
}

export default LogoContainer;