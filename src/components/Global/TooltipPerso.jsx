import { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * props: traduction
 * pros: abrevation
 */
class TooltipPerso extends Component {
    state = {}
    render() {
        return (
            <span>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{this.props.traduction}</Tooltip>}>
                    <span className="d-inline-block" 
                    style={{ 
                        color:"var(--vert-color)",
                        fontWeight: "900"
                    }}
                    >
                        {this.props.abrevation}
                    </span>
                </OverlayTrigger>

            </span>
        );
    }
}

export default TooltipPerso;