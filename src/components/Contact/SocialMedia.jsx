import { Component } from "react";
import './SocialMedia.css'

class SocialMedia extends Component {
    state = {}
    render() {
        return (
            <div className="social-media-big-screen">
                <h2 className="my-underline" style={{textAlign: "center"}}>Social Média</h2>
                <br/><br/>
                <div className="social-media-div">
                    <ul className="social-media-ul">
                        <li className="social-media-li">
                            <a className="social-media-a linkedin-a" href="https://www.linkedin.com/" target="blank">
                                <i className="fab fa-linkedin-in social-media-icone">
                                </i>
                            </a>
                        </li>
                        <li className="social-media-li">
                            <a className="social-media-a facebook-a" href="https://www.facebook.com/" target="blank">
                                <i className="fab fa-facebook-f social-media-icone">
                                </i>
                            </a>
                        </li>
                        <li className="social-media-li">
                            <a className="social-media-a instagram-a" href="https://www.instagram.com/" target="blank">
                                <i className="fab fa-instagram social-media-icone">
                                </i>
                            </a>
                        </li>
                        <li className="social-media-li">
                            <a className="social-media-a twitter-a" href="https://twitter.com/" target="blank">
                                <i className="fab fa-twitter social-media-icone">
                                </i>
                            </a>
                        </li>
                        <li className="social-media-li">
                            <a className="social-media-a youtube-a" href="https://youtube.com/" target="blank">
                                <i className="fab fa-youtube social-media-icone">
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialMedia;