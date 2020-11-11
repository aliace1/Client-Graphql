import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardTitle from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import './Style.css'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";


class livres extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas:[]
        }
    }

    componentDidMount(){
        this.getLivres()
    }

    getLivres(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query{livres{titre, matiere, contenu, date}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{livres}}})=> {
            // console.log(e);
            this.setState({
                datas:livres
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    render() {
        const { datas } = this.state
        return (
            <div>
            <Navbar history = {this.props.history} />
            <Container spacing={2} >
                <br/>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                >
                    <Grid item md={4} sm={12} edge={"start"} fullWidth>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={"button"}
                            startIcon={<AddIcon />}
                        >
                            <Link to="/AjoutLivre" >
                                Nouvelleaux livres
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item md={4} sm={12} edge={"start"} fullWidth>
                        <InputBase
                            variant="outlined"
                            className={"classes.input"}
                            placeholder="Rechercher"
                            inputProps={{ 'aria-label': 'Rechercher' }}
                        />
                        <IconButton type="submit" className={"classes.iconButton"} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <br/>
                        {
                            datas && datas.map((e, index) => {
                                return(
                                    <Card className={"root"} key={index}>
                                        <CardHeader
                                            title={e.titre}
                                            subheader={e.date}
                                        />
                                        <CardTitle
                                            title={e.matiere}
                                         />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p" className={"contenu"}>
                                                {e.contenu}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Grid>
                                                <Grid item >
                                                    <Button color="primary" outlined>
                                                        Voir plus
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardActions>

                                    </Card>
                                )
                            })
                        }

            </Container>
            </div>
        );
    }
}

export default livres;
