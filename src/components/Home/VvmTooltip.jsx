import { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class VvmTooltip extends Component {
    state = {}
    render() {
        return (
            <span>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Watch Market Club</Tooltip>}>
                    <span className="d-inline-block" 
                    style={{ 
                        color:"var(--vert-color)",
                        fontWeight: "900"
                    }}
                    >
                        W.M.C
                    </span>
                </OverlayTrigger>

            </span>
        );
    }
}

export default VvmTooltip;