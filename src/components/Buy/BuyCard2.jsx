import { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
// Images
import achatCard2 from "../../img/achat/achatCard2.jpeg"
import achatCard21 from "../../img/achat/1.jpeg"
import achatCard22 from "../../img/achat/3.jpeg"
import achatCard23 from "../../img/achat/4.jpeg"
import achatCard24 from "../../img/achat/5.jpeg"





class BuyCard2 extends Component {
    state = {}

    render() {
        const arrayOfImages = [achatCard21, achatCard2, achatCard22, achatCard23, achatCard24]
        var randomItem = arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
        const imgUrl = randomItem

        const t = this.props.t
        return (
            <Container>
                <div className="card col-md-12 p-3 my-horizontal-card">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" alt="montre" src={imgUrl} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <br />
                                <Card.Title>
                                    <h4>{t('achat-card-2-title')}</h4>
                                </Card.Title>
                                <Card.Text>
                                    {t('achat-card-2-texte')}
                                </Card.Text>
                                <Link to={'/contact'}>
                                    <p className="btn btn-success" style={{ backgroundColor: "var(--vert-color)" }}>{t('contact-us')}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default withTranslation()(BuyCard2);







