import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import './LoginAndRegister.css'

class LoginRegistre extends React.Component{
    render(){
        return(
            <div className="container-login">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <h2 className="title">Se connecter</h2>
                            <div className="input-field">
                                <i className="fa fa-envelope"></i>
                                <input type="email" placeholder="Votre email"/>
                            </div>

                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Votre mots de passe"/>
                            </div>

                            <input type="submit" value="Connexion" className="btn solid"/>

                            <p className="social-text">Rejoignez nos :</p>
                            <div className="social-media">
                                <Link to='/#' className="social-icon">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to='/#' className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                                <Link to='/#' className="social-icon">
                                    <i className="fa fa-linkedin"></i>
                                </Link>
                            </div>
                        </form>

                        <form action="" className="sign-up-form">
                            <h2 className="title">S'enregistrer</h2>
                            <div className="input-field">
                                <i className="fa fa-envelope"></i>
                                <input type="email" placeholder="Votre email"/>
                            </div>

                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Votre mots de passe"/>
                            </div>

                            <input type="submit" value="Connexion" className="btn solid"/>

                            <p className="social-text">Rejoignez nos :</p>
                            <div className="social-media">
                                <Link to='/#' className="social-icon">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to='/#' className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                                <Link to='/#' className="social-icon">
                                    <i className="fa fa-linkedin"></i>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Actus</h3>
                            <p className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga reiciendis facilis.
                            </p>
                            <button className="btn transparent" id="sign-up-btn">S'enregistrer</button>
                        </div>
                        <img src="/assets/img/compte.svg" className="image" alt=""/>
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>A tout</h3>
                            <p className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga reiciendis facilis.
                            </p>
                            <button className="btn transparent" id="sign-in-btn">Connexion</button>
                        </div>
                        <img src="/assets/img/connexion.svg" className="image" alt=""/>
                    </div>
                </div>
                <script src="assets/js/app.js"></script>

            </div>
            
        );
    }
}

export default LoginRegistre