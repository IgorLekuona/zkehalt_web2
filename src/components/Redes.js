import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

import "../App.css";

const Redes = () => {
    return (
        <div className="redes-container">
            <h1> Sare sozialak </h1>
            <div className="redes-iconos-container">
                <a href="https://www.youtube.com/@zarautzkehalterofilia5586"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="4x" />
                </a>
                <a href="https://www.tiktok.com/@zkehalterofilia"
                    className="tiktok social">
                    <FontAwesomeIcon icon={faTiktok} size="4x" />
                </a>
                <a href="https://twitter.com/ZKEhalterofilia" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="4x" />
                </a>
                <a href="https://www.instagram.com/zkehalterofilia"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="4x" />
                </a>
            </div>
        </div>
    );
}

export default Redes;