import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import './Detail.css'
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CommentIcon from '@material-ui/icons/Comment';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Parser from "react-html-parser";
import { Link } from "react-router-dom";
import Moment from "react-moment";


class DetailLivre extends Component {
    constructor(props){
        super(props);
        this.state = {
            livreId:'',
            date:new Date(),
            creator:' ',
            creators:[],
            datas:{},
            commentaire:[],
            users:[],
            repCommentaire:[]
        }
    }

    async componentDidMount(){
       await this.getLivre()
       await this.getUsers()
       await this.getCommentaire()
       await this.getRespCommentaire()
    }

    getUsers(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query{users{_id nom prenom matricule email}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{users}}}) => {
            // console.log({e});
            this.setState({
                users: users 
            })
        })
        .catch(err => {
            console.log({err});
        })
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
            if(stock2){
                this.setState({
                    datas:stock2
                })
            }
        })
        .catch(err => {
            console.log({err});
        })
    }

    getCommentaire(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query{commentaires{_id commentaire date creator createdUsers{_id}}}"
            },
            headers: {
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{commentaires}}}) => {
            // console.log(commentaires);
            // console.log(e);
            var stock = commentaires.filter(e => e.creator === this.props.match.params.id);
            // console.log(stock);
            this.setState({
                commentaire:stock
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    getRespCommentaire(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query{respCommentaires{_id commentaire date creator idCommentaire createdUsers{_id}}}"
            },
            headers: {
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{respCommentaires}}}) => {
            // console.log(respCommentaires);
            var stock1 = respCommentaires.filter(k => k.creator === this.props.match.params.id);
            this.setState({
                repCommentaire: stock1
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    handleDelete(id){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "mutation{deleteLivre(livreId:\""+id+"\"){action}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data}}) => {
            if(data.deleteLivre.action){
                this.props.history.push('/Livres')
            }
        })
        .catch(err => {
            console.log({err});
        })
    }
    
    render() {
        const { titre, date, matiere, contenu, _id } = this.state.datas;
        const { commentaire , repCommentaire, users} = this.state;
        return (
            <div>
                <Navbar history = {this.props.history} />
            
            <Container>
                <br/>
                <br/>
                <br/>
                <Card className={"principale"}>

                    <CardContent>
                        <Typography variant="h4" color="textSecondary" value={titre} component="p" paragraph>Titre : {" "}
                            {titre}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            <Moment format="DD/MM/YYYY">
                                {date}
                            </Moment>
                        </Typography>
                        <Typography variant="h6" color="textSecondary" value={matiere} component="h1" paragraph>Matière : {" "}
                            {matiere}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography paragraph>Contenu :</Typography>
                            {Parser(contenu)}
                    </CardContent>
                    
                    <CardActions>
                        <Button size="meduim" color="primary" className={"button"}>
                            <Link to={'/Commentaire/Livres/'+_id}>
                                <CommentIcon />  Commenter
                            </Link>
                        </Button>
                        {
                            localStorage.hasOwnProperty('isAdmin') ? (
                                localStorage.getItem('isAdmin') === 'y' && 
                        <CardActions>
                            <Button size="meduim" color="primary" >
                            <Link to={'/Modifier-livre/'+_id}>
                                Modifier
                            </Link>
                            </Button>
                            <Button size="meduim" color="primary"
                                onClick={this.handleDelete.bind(this, _id)}
                            >
                                Supprimer
                            </Button>
                        </CardActions>
                            ) : null
                        }
                    </CardActions>
                        
                </Card>

            </Container>

            <Container>
            <Typography paragraph>Commentaire :</Typography>
            <div>
                    {
                         commentaire && commentaire.map(e => {
                            let nom = ''
                            const us = users && users.filter(j => j._id === e.createdUsers[0]._id)[0]
                            // if(us){
                             //     nom = us.nom
                             // }
                            return <Card container className="card">
                                <CardContent className="card-comment">
                                    <p id="nom"> {us && us.nom} </p>
                                    <p className="comment"> {e.commentaire } </p>
                                </CardContent>
                                <CardActions>
                                    <Button size="meduim" color="primary" className={"button"}>
                                        <Link to={'/RespCommentaire/Livres/'+e._id+'/'+_id}>
                                            <CommentIcon />  Repondre
                                        </Link>
                                    </Button>
                                </CardActions>
                                
                                <div className="respcomment">
                                        {
                                            
                                            repCommentaire && repCommentaire.filter((h) => {
                                                // console.log(h.idCommentaire);
                                                return h.idCommentaire === e._id
                                            }).map((v, i) => {
                                                // console.log(v);
                                                let nom = ''
                                                const use = users && users.filter(g => g._id === v.createdUsers[0]._id)[0]
                                                return <Card container className="card2" key={i}>
                                                    <CardContent className="rep-comment">
                                                        {/* console.log(respCommentaire); */}
                                                        <div id="comment2">
                                                            <p id="nom"> {use && use.nom} </p>
                                                            <p className="comment2"> {v.commentaire} </p>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                                })
                                        }
                                    </div>

                            </Card>
                        }) 
                    } <br/>
                </div>
            </Container>
            
            </div>
        );
    }
}

export default DetailLivre;