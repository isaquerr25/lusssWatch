import '../css/Parralax.css'
import { Component } from 'react';


class Parralax extends Component {
    state = {  }
    render() { 
        const imgUrl = this.props.imgUrl
        return ( 
            <div className="parallax" style={{backgroundImage: `url('${imgUrl}')`}}></div>
         );
    }
}
 
export default Parralax;