import React from 'react'
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-xs-12 segment-one">
                                <h2>En savoir plus</h2>
                                <p>Ce site est crée par des professeurs, praticien en Droit. Ce
                projet consiste à former, discuter le Droit. Corriger les
                étudiants aux fautes eventielles au devoir comme la méthodologie
                ....</p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12 segment-two">
                                <h2>Liens</h2>
                                <ul>
                                    <li>
                                        <Link to="/Cours">Cours</Link>
                                    </li>
                                    <li>
                                        <Link to="/Livres">Livres</Link>
                                    </li>
                                    <li>
                                        <Link to="/Tp">Travaux pratique</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12 segment-three">
                                <h2>Rejoignez-nos</h2>
                                <Link to="/#">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to="/#">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                                <Link to="/#">
                                    <i className="fa fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-bottom-text">
                    &copy;{" "}{new Date().getFullYear()}{" "} <img src="assets/img/footer.png" alt="logo" style={{width:60, marginTop:8}} /> {" "} par {" "}
                    <a href="https://www.linkedin.com/in/rasolonjatovo-martino-2a4841151/" 
                        className="linkedinLink"
                        target="_blank"
                    >
                        Martino
                    </a>
                </p>
            </footer>
        )
    }
}

export default Footer
