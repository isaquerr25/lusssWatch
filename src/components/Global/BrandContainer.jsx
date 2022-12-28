import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../css/BrandContainer.css'

class BrandContainer extends Component {
    render() {
        return <div>
            <Container className="container-spacing">
                <Row>
                    <Col xs={6} md={4} onClick={()=> window.open("https://www.rolex.com/", "_blank")} className="brand-container-rolex brand-div"></Col>
                    <Col xs={6} md={4} onClick={()=> window.open("https://www.audemarspiguet.com/", "_blank")} className="brand-container-audemars brand-div"></Col>
                    <Col xs={6} md={4} onClick={()=> window.open("https://www.fpjourne.com/", "_blank")} className="brand-container-journe brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.breitling.com/", "_blank")} className="brand-container-breitling brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.cartier.com/", "_blank")} className="brand-container-cartier brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.jaeger-lecoultre.com/", "_blank")} className="brand-container-jaeger brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.longines.com/", "_blank")} className="brand-container-longines brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.patek.com/", "_blank")} className="brand-container-patek brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.tudorwatch.com/", "_blank")} className="brand-container-tudor brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.vacheron-constantin.com/", "_blank")} className="brand-container-vacheron brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.tagheuer.com/", "_blank")} className="brand-container-tag brand-div"></Col>
                    <Col xs={6} md={4}  onClick={()=> window.open("https://www.alange-soehne.com/", "_blank")} className="brand-container-lange brand-div"></Col>
                </Row>
            </Container>
        </div>;
    }
}

export default BrandContainer;