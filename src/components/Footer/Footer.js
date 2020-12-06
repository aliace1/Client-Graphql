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
                                    <li>
                                        <Link to="/Livres">Livres</Link>
                                    </li>
                                    <li>
                                        <Link to="/Tp">Travaux pratique</Link>
                                    </li>
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

// import React, {Component} from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import Tooltip from "@material-ui/core/Tooltip";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from '@material-ui/icons/Add';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import "./footer.css"


// class Footer extends Component {
//     render() {
//         return (
//             <div>
//                 <React.Fragment>
//                     <CssBaseline />
//                     <AppBar color="primary" className={"appBar"}>
//                         <Toolbar>
//                             <Grid
//                                 container
//                                 direction="row"
//                                 justify="space-between"
//                                 alignItems="flex-start"
//                             >
//                                 <Grid item md={4} sm={12} xs={12}>
//                                     <Typography variant={"h6"} color={"secondary"}>
//                                         |  En savoir plus
//                                     </Typography>
//                                     <p>
//                                         blablablabla
//                                     </p>

//                                 </Grid>
//                                 <Grid item md={4} sm={12} xs={12}>
//                                     <Typography variant={"h6"} color={"secondary"} bold>
//                                         |  Liens
//                                     </Typography>
//                                     <Grid>
//                                         <Grid item >
//                                             <hr/>
//                                             <Typography>
//                                                 <a>blablabla</a>
//                                             </Typography>
//                                             <hr/>
//                                             <Typography>
//                                                 <a>blablabla</a>
//                                             </Typography>
//                                             <hr/>
//                                             <Typography>
//                                                 <a>blablabla</a>
//                                             </Typography>

//                                         </Grid>
//                                     </Grid>


//                                 </Grid>
//                                 <Grid item md={4} sm={12} xs={12}>
//                                     <Typography variant={"h6"} color={"secondary"}>
//                                         |  Rejoindre à nous
//                                     </Typography>
//                                     <Grid
//                                         container
//                                         direction="row"
//                                         justify="space-between"
//                                         alignItems="center"
//                                     >
//                                         <Grid item md={4} xs={12}>
//                                             <Tooltip title="Facebook" aria-label="Facebook">
//                                                 <Fab color="primary" className={"absolute"}>
//                                                     <FacebookIcon />
//                                                 </Fab>
//                                             </Tooltip>
//                                         </Grid>
//                                         <Grid item xs={12}>
//                                             <Tooltip title="Add" aria-label="add">
//                                                 <Fab color="primary" className={"absolute"}>
//                                                     <TwitterIcon />
//                                                 </Fab>
//                                             </Tooltip>
//                                         </Grid>
//                                         <Grid item xs={12}>
//                                             <Tooltip title="Add" aria-label="add">
//                                                 <Fab color="primary" className={"absolute"}>
//                                                     <MailOutlineIcon />
//                                                 </Fab>
//                                             </Tooltip>
//                                         </Grid>
//                                     </Grid>              
//                                 </Grid>
//                             </Grid>
//                         </Toolbar>
//                     </AppBar>
//                 </React.Fragment>
                
//             </div>
//         );
//     }
// }

// export default Footer;