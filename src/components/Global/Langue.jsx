import React from 'react';
class Langue extends React.Component {
    render() {
        return (
            <div className="langue-button-div">
                <button className="btn btn-link langue-button" onClick={this.props.handleChange} value="fr">
                    🇫🇷
                </button>
                <button className="btn btn-link langue-button" onClick={this.props.handleChange} value="en">
                    🇬🇧
                </button>

            </div>
        );
    }
}

export default Langue;