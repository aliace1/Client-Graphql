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
import Parse from "html-react-parser";
import Moment from "react-moment";

class Tp extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas:[],
            creator:[],
            creators:[]
        }
    }

    componentDidMount(){
        this.getAllDevoirs()
        this.setItems()
    }

    setItems(){
        axios.post('https://api.fordisco-ius.com/graphql', null, {
            params:{
                query: "query {classes {_id nom} }"
            }
        })
        .then(({data:{data:{classes}}}) => {
            // console.log(classes[0]);
            this.setState({
                creators: classes
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    getAllDevoirs(){
        axios.post('https://api.fordisco-ius.com/graphql', null, {
            params:{
                query: "query{devoirs{_id titre matiere contenu date creator}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{devoirs}}}) => {
            // console.log(e);
            this.setState({
                datas:devoirs
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    render() {
        const { datas, creators } = this.state
        return (
            <div>
            <Navbar history = {this.props.history} />
            <Container spacing={20} >
                <br/>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                >
                    <Grid item md={4} sm={12} edge={"start"} fullWidth>
                        {
                            localStorage.hasOwnProperty('isAdmin') ? (
                                localStorage.getItem('isAdmin') === 'y' && 
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={"button"}
                                    startIcon={<AddIcon />}
                                >
                                    <Link to="/AjoutTp" >
                                        Nouveau devoir
                                    </Link>
                                </Button>
                            ) : null
                        }
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
                                const stock = creators && creators.filter(j => j._id === e.creator)[0]
                                    let cre = ''
                                    if(stock){
                                        cre = stock.nom
                                    }
                                return(
                                    <Card className={"root"} key={index}>
                                        <div className="text-center">
                                            {
                                                cre
                                            }
                                        </div>
                                        <CardHeader
                                            title={e.titre}
                                            subheader={<Moment format="DD/MM/YYYY">
                                                {e.date}
                                            </Moment>}
                                        />
                                        <CardTitle 
                                            title={e.matiere}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p" className={"contenu"}>
                                                {Parse(e.contenu)[100]}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Grid>
                                                <Grid item >
                                                   <Link to="/Devoir-details">
                                                    {/* {console.log(e)} */}
                                                        <Button color="primary">
                                                            <Link to={'/DetailTp/'+e._id}>
                                                                Voir plus
                                                            </Link>
                                                        </Button>
                                                   </Link>
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

export default Tp;
