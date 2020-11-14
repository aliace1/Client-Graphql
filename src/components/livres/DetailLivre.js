import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './Detail.css'
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CommentIcon from '@material-ui/icons/Comment';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Parser from "react-html-parser";


class DetailLivre extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            creator:' ',
            creators:[],
            datas:{}
        }
    }

    componentDidMount(){
        this.getLivre()
    }

    getLivre(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query{livres{_id, titre, matiere, contenu, date}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{livres}}}) => {
            // console.log(e);
            var stock2 = livres.filter(e => e._id === this.props.match.params.id)[0];
            // console.log([0]);
            this.setState({
                datas:stock2
            })
        })
        .catch(err => {
            console.log({err});
        })
    }
    
    render() {
        const { titre, date, matiere, contenu } = this.state.datas;
        return (
            <div>
                <Navbar history = {this.props.history} />
            
            <Container>
                <br/>
                <br/>
                <br/>
                <Card className={"principale"}>

                    <CardContent>
                        <Typography variant="h4" color="textSecondary" component="p">
                            {titre}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            {date}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h1">
                            {matiere}
                        </Typography>
                    </CardContent>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                                {Parser(contenu)}
                        </CardContent>
                        <CardActions>
                            <Button size="meduim" color="primary" className={"button"}>
                                <CommentIcon />  Commenter
                            </Button>
                            <Button size="meduim" color="primary">
                                Modifier
                            </Button>
                            <Button size="meduim" color="primary">
                                Supprimer
                            </Button>
                        </CardActions>
                </Card>

            </Container>
            </div>
        );
    }
}

export default DetailLivre;