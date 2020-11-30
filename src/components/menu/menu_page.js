import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery.min';
import './Style.css';

class MenuPage extends Component {
    render() {
        return (
            <div>
                {/* <main role="main"> */}

                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                            <li data-target="#myCarousel" data-slide-to="1"/>
                            <li data-target="#myCarousel" data-slide-to="2"/>
                            <li data-target="#myCarousel" data-slide-to="3"/>
                            <li data-target="#myCarousel" data-slide-to="4"/>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/img/Formation2.png" alt="Formation" srcset=""/>
                                <div className="container">
                                    <div className="carousel-caption text-center">
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Discussion2.png" alt="Formation" srcSet=""/>
                                <div className="container">
                                    <div className="carousel-caption">

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Discussion2.png" alt="Formation" srcSet=""/>
                                <div className="container">
                                    <div className="carousel-caption text-center">
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Droit2.png" alt="Formation" srcSet=""/>
                                <div className="container">
                                    <div className="carousel-caption text-center">
                                    </div>
                                </div>
                            </div>
                            {/* <div className="carousel-item">
                                <img src="assets/img/Start.jpg" alt="Formation" srcSet=""/>
                                <div className="container">
                                    <div className="carousel-caption text-center">
                                       <Button color={"primary"}>
                                            Commencer
                                       </Button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>


                {/* </main> */}

            </div>
        );
    }
}

export default MenuPage;