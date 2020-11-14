import React from 'react'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

class Commentaire extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            commentaire:'',
            date:new Date(),
            createdUsers:' ',
            creators:[],
            datas:[]
        }
    }

    componentDidMount(){
        this.getUsers()
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
                datas: users 
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    onSubmit(){
        const { commentaire, date, creators } = this.state;
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "mutation{createCommentaire(commentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\"}){commentaire date}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{createCommentaire}}}) => {
            console.log(createCommentaire);
            this.setState({
                date:new Date(),
                creators:[...creators, createCommentaire]
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    onChange(e){
        // console.log(e);
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const { commentaire, creators } = this.state;
        return (
            <div>
                <Navbar history = {this.props.history} />
                <Grid container spacing={2}>
                    <Typography variant={'h5'} className={'titre'}>
                        Commentaire :
                    </Typography>
                    <Grid item xs={12}>
                        <TextField 
                        id="outlined-basic" 
                        value={commentaire}
                        name='commentaire'
                        label="Commentaire" variant="outlined" 
                        type={'name'} fullWidth
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={6} xs={6}>
                        <Button variant="contained" color={"primary"} fullWidth onClick={this.onSubmit.bind(this)}>
                            Commenter
                        </Button>
                    </Grid>
                </Grid>
                <div>
                    {
                        creators && creators.map((e, index) => {
                            console.log(e);
                            return(
                                <>
                                    <div>
                                        <h1> {e.commentaire} </h1>
                                        <p> {e.date} </p>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Commentaire
