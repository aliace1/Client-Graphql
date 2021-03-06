import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Moment from "react-moment";
import jwt_decode from "jwt-decode";

class RespCommentaire extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            commentaire:'',
            date:new Date(),
            createdUsers:' ',
            creators:[],
            creator:[],
            datas:[]
        }
    }

    componentDidMount(){
        this.getUser()
    }

    getUser(){
        axios.post('https://api.fordisco-ius.com/graphql', null, {
            params:{
                query: "query{users{_id nom prenom matricule email}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{users}}}) => {
            this.setState({
                datas: users
            })
        })
        .catch(err => {
            console.log({err});
        })
        // axios.post('http://localhost:8000/graphql', null, {
        //     params:{
        //         query: "query{users{_id nom prenom matricule email}}"
        //     },
        //     headers:{
        //         Authorization:'Bearer '+localStorage.getItem("Token")
        //     }
        // })
        // .then(({data:{data:{users}}}) => {
        //     this.setState({
        //         datas: users
        //     })
        // })
        // .catch(err => {
        //     console.log({err});
        // })
    }

    onSubmit(){
        var decoded = jwt_decode(localStorage.getItem('Token')).userId;
        const { commentaire, date, creators } = this.state;
        // console.log(this.props.match.params.id);
        switch(this.props.match.params.type){
            case 'Cours':
                return axios.post('https://api.fordisco-ius.com/graphql', null, {
                    params:{
                        query: "mutation{createRespCommentaire(respCommentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+this.props.match.params.idA+"\",idCommentaire:\""+this.props.match.params.id+"\",createdUsers:\""+decoded+"\"}){_id commentaire date creator createdUsers{_id}}}"
                    },
                    headers:{
                        Authorization:'Bearer '+localStorage.getItem("Token")
                    }
                })
                // return axios.post('http://localhost:8000/graphql', null, {
                //     params:{
                //         query: "mutation{createRespCommentaire(respCommentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+this.props.match.params.idA+"\",idCommentaire:\""+this.props.match.params.id+"\",createdUsers:\""+decoded+"\"}){_id commentaire date creator createdUsers{_id}}}"
                //     },
                //     headers:{
                //         Authorization:'Bearer '+localStorage.getItem("Token")
                //     }
                // })
                .then(({data:{data:{createRespCommentaire}}}) => {
                    this.props.history.push('/Detail/'+this.props.match.params.idA)
                    // console.log(this.props.match.params.type);
                })
                .catch(err => {
                    console.log({err});
                })
            case 'Livres':
                return axios.post('https://api.fordisco-ius.com/graphql', null, {
                    params:{
                        query: "mutation{createRespCommentaire(respCommentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+this.props.match.params.idA+"\",idCommentaire:\""+this.props.match.params.id+"\",createdUsers:\""+decoded+"\"}){_id commentaire date creator createdUsers{_id}}}"
                    },
                    headers:{
                        Authorization:'Bearer '+localStorage.getItem("Token")
                    }
                })
                // return axios.post('http://localhost:8000/graphql', null, {
                //     params:{
                //         query: "mutation{createRespCommentaire(respCommentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+this.props.match.params.idA+"\",idCommentaire:\""+this.props.match.params.id+"\",createdUsers:\""+decoded+"\"}){_id commentaire date creator createdUsers{_id}}}"
                //     },
                //     headers:{
                //         Authorization:'Bearer '+localStorage.getItem("Token")
                //     }
                // })
                .then(({data:{data:{createRespCommentaire}}}) => {
                    this.props.history.push('/Detail-livre/'+this.props.match.params.idA)
                })
                .catch(err => {
                    console.log({err});
                })
            case 'Tp':
                return axios.post('https://api.fordisco-ius.com/graphql', null, {
                    params:{
                        query: "mutation{createRespCommentaire(respCommentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+this.props.match.params.idA+"\",idCommentaire:\""+this.props.match.params.id+"\",createdUsers:\""+decoded+"\"}){_id commentaire date creator createdUsers{_id}}}"
                    },
                    headers:{
                        Authorization:'Bearer '+localStorage.getItem("Token")
                    }
                })
                // return axios.post('http://localhost:8000/graphql', null, {
                //     params:{
                //         query: "mutation{createRespCommentaire(respCommentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+this.props.match.params.idA+"\",idCommentaire:\""+this.props.match.params.id+"\",createdUsers:\""+decoded+"\"}){_id commentaire date creator createdUsers{_id}}}"
                //     },
                //     headers:{
                //         Authorization:'Bearer '+localStorage.getItem("Token")
                //     }
                // })
                .then(({data:{data:{createRespCommentaire}}}) => {
                    this.props.history.push('/DetailTp/'+this.props.match.params.idA)
                })
                .catch(err => {
                    console.log({err});
                })
        }
    }

    onChange(e){
        // console.log(e);
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { commentaire, creators } = this.state;
        return(
            <div className="mt-4">
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
                        <Button variant="contained" color={"primary"} 
                        fullWidth onClick={this.onSubmit.bind(this)}
                        className="mb-4 mt-2"
                        >
                            Commenter
                        </Button>
                    </Grid>
                </Grid>
                <div>
                    {
                        creators && creators.map((e, index) => {
                            // console.log(e);
                            return(
                                <>
                                    <div>
                                        <h6> {e.commentaire} </h6>
                                        {/* <p> {console.log(e)} </p> */}
                                        <p> {<Moment format="DD/MM/YYYY">
                                                {e.date}
                                            </Moment>} </p>
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

export default RespCommentaire