import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/BrandLogo.css'
import { withTranslation } from 'react-i18next';

class BrandLogo extends Component {

    render() {
        const t = this.props.t
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4} className="brand-logo-rolex brand-logo-form" onClick={this.props.onBrandLogoClick} id="Rolex"></Col>
                    <Col xs={6} md={4} className="brand-logo-breitling brand-logo-form" onClick={this.props.onBrandLogoClick} id="Breitling"></Col>
                    <Col xs={6} md={4} className="brand-logo-omega brand-logo-form" onClick={this.props.onBrandLogoClick} id="Omega"></Col>
                    <Col xs={6} md={4} className="brand-logo-hublot brand-logo-form" onClick={this.props.onBrandLogoClick} id="Hublot"></Col>
                    <Col xs={6} md={4} className="brand-logo-tagheuer brand-logo-form" onClick={this.props.onBrandLogoClick} id="Tag Heuer"></Col>
                    <Col xs={6} md={4} className="brand-logo-iwc brand-logo-form" onClick={this.props.onBrandLogoClick} id="IWC"></Col>
                    <Col xs={6} md={4} className="brand-logo-jaeger brand-logo-form" onClick={this.props.onBrandLogoClick} id="Jaeger LeCoultre"></Col>
                    <Col xs={6} md={4} className="brand-logo-patek brand-logo-form" onClick={this.props.onBrandLogoClick} id="Patek Philippe"></Col>
                    <Col xs={6} md={4} className="brand-logo-longines brand-logo-form" onClick={this.props.onBrandLogoClick} id="Longines"></Col>
                    <Col xs={6} md={4} className="brand-logo-audemars brand-logo-form" onClick={this.props.onBrandLogoClick} id="Audemars Piguet"></Col>
                    <Col xs={6} md={4} className="brand-logo-cartier brand-logo-form" onClick={this.props.onBrandLogoClick} id="Cartier"></Col>
                    <Col xs={6} md={4} className="brand-logo-autre brand-logo-form" onClick={this.props.onBrandLogoClick} id="Autre">{t('autres-marques')}</Col>
                 
                </Row>
            </Container>
        );
    }
}

export default withTranslation()(BrandLogo);