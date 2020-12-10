import React from 'react'
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./footer.css"

class Footer extends React.Component {
    render() {
        return (

            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Colonne 1 */}
                        <div className="col">
                            <h4 className="titre">En Savoir plus</h4>
                            <p className="list-unstyled">
                            Ce site est crée par des professeurs, praticien en Droit. Ce
                            projet consiste à former, discuter le Droit. Corriger les
                            étudiants aux fautes eventielles au devoir comme la méthodologie
                            ....
                            </p>
                            <ul className="font-icon">
                                <li>
                                    <a href="https://www.facebook.com/Fordisco-ius-101611061646677/" target="_blank"> <i className="fa fa-facebook"></i> </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-twitter"></i> </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-linkedin"></i> </a>
                                </li>
                            </ul>
                        </div>
                        {/* Colonne 2 */}
                        <div className="col">
                            <h4 className="titre">Menu</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/Cours">Cours</Link>
                                    </li>
                                    <hr/>
                                    <li>
                                        <Link to="/Livres">Livres</Link>
                                    </li>
                                    <hr/>
                                    <li>
                                        <Link to="/Tp">Travaux pratique</Link>
                                    </li>
                                    <hr/>
                            </ul>
                        </div>
                        {/* Colonne 3 */}
                        <div className="col">
                            <h4 className="titre">Contacts</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fa fa-map-marker"></i>{" "}Fianarantsoa 301, Madagascar
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i> {" "} fordisco.ius@outlook.fr
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i> {" "} + 261 20 75 931 93
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <p>
                            &copy;{" "} 
                            <Link to="/">
                                <img
                                src="assets/img/footer.png"
                                    alt="logo"
                                    style={{ width: "50px" }}
                                />
                            </Link>{" "} {new Date().getFullYear()}{" "} | Par {" "}
                            <a
                                href="https://www.linkedin.com/in/rasolonjatovo-martino-2a4841151/"
                                className="linkedinLink"
                                target="_blank">
                                    Martino
                            </a> 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
