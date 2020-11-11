import {AppBar, Container, Fab, Hidden, List, ListItem, ListItemText, makeStyles, Toolbar} from "@material-ui/core";
import {KeyboardArrowUp} from "@material-ui/icons";
import * as React from "react";
import HideOnScroll from "./HideOnScrooll";
import SideDrawer from "./SideDrawer";
import BackToTop from "./BackToTop";
import Typography from "@material-ui/core/Typography";
import "./Style.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
    },
    navListDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        color: `white`
    },
    title: {
        flexGrow: 1,
        margin:"auto"
    },
    compte:{
        margin:"auto",
        display: `flex`
    }
});

const nav1 = [
    { title: `Accueil`, path: `/` , icons:""},
    { title: `Cours`, path: `/Cours` , icons:"" },
    { title: `Travaux pratique`, path: `/Tp` , icons:""},
    { title: `Livres`, path: `/Livres` , icons:"" },
    { title: `Membres`, path: `/Membres` , icons:"" },
    { title: `Verification`, path: `/Verification`, icon:"" },
];

let navLinks = [
    { title: `Accueil`, path: `/` , icons:""},
    { title: `Cours`, path: `/Cours` , icons:"" },
    { title: `Travaux pratique`, path: `/Tp` , icons:""},
    { title: `Livres`, path: `/Livres` , icons:"" }
];

function onSubmit(history){
    // console.log(props);
    localStorage.removeItem('Token')
    localStorage.removeItem('isAdmin')
    history.push('/Signin')
}

let isConnecter = false;

const NavBar = ({history}) => {
    // console.log(props);
    const classes = useStyles();
    if(localStorage.hasOwnProperty('isAdmin')){
        if(localStorage.getItem('isAdmin')==='y'){
            navLinks = nav1
        }
    }

    if(localStorage.hasOwnProperty('Token')){
        isConnecter = true
    }




    const dialog = () => {
        return (
            <Dialog onClose={"handleClose"} aria-labelledby="simple-dialog-title" open={"open"}>
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <List>
                    <ListItem autoFocus button >
                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Add account" />
                    </ListItem>
                </List>
            </Dialog>
        )
    };
    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar position="fixed" color={"primary"}>
                    <Toolbar component="nav" variant="dense">
                        <Container className={classes.navbarDisplayFlex} fluid>
                            <Typography variant="h5" className={classes.title} color="white">
                                Fordisco-ius
                            </Typography>

                            <Hidden smDown>
                                <List
                                    component="nav"
                                    aria-labelledby="main navigation"
                                    className={classes.navListDisplayFlex}
                                >
                                    { 
                                    navLinks.map(({ title, path }) => (
                                        <Link to={path} key={title} className={classes.linkText}>
                                            <ListItem button>
                                                <ListItemText primary={title}/>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Hidden>
                                <IconButton
                                    edge={"end"}
                                    className={classes.compte}
                                    color="inherit"
                                    elevation={5}
                                    onClick{...dialog}
                                >
                                    <Link to="/Signup">
                                        <AccountCircleIcon/>
                                    </Link>
                                </IconButton>
                                {
                                    !isConnecter?<Button onClick={()=>onSubmit(history)}>
                                    Deconnexion
                                </Button>:<Button>
                                    Connexion
                                </Button>
                                }
                            <Hidden mdUp>
                                <SideDrawer navLinks={navLinks} />
                            </Hidden>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor"/>
            <BackToTop>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </React.Fragment>
    );
};

export default NavBar;
