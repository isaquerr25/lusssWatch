import React, { Component } from 'react';
import '../css/jumbo.css'


class JumbotronImage extends Component {
    state = {}
    render() {
        return (
            <div className="my-jumbo">
                <img src={this.props.imgSrc} alt="Audemars Piguet Rolex Omega Cartier Longines Iwc Jaeger Lecoultre Bell Ross Blancpain Breguet Zenith"/>

            </div>
        );
    }
}

export default JumbotronImage;