import { Component } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

/**
 * props: titre, text, button
 */
class PopOverPerso extends Component {
    state = {  }
    render() { 
        const popover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">{this.props.titre}</Popover.Header>
              <Popover.Body>
                {this.props.text}
              </Popover.Body>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              {this.props.button}
            </OverlayTrigger>
          );
        return ( 
            <Example />
              
         );
    }
}
 
export default PopOverPerso;