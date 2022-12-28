import { Component } from "react";
import chrono24 from '../../img/chrono24.png'
import '../css/Chrono24.css'
import { Container } from "react-bootstrap";

class Chrono24 extends Component {
    state = {}
    render() {
        return (
            <Container style={{textAlign:"center"}}>
                <div  id="chrono24-div">
                    <a href="https://www.chrono24.fr/" target="blank">
                        <img id="chrono24-img" src={chrono24} alt="chrono24" />
                    </a>
                </div>
            </Container>
        );
    }
}

export default Chrono24;