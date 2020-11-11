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
            creator:' ',
            creators:[]
        }
    }
    onSubmit(){
        const { commentaire, date, creator, creators } = this.state;
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "mutation {createCommentaire(commentaireInput:{commentaire:\""+commentaire+"\",date:\""+date+"\",creator:\""+creator+"\"}){commentaire date creator}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then((e) => {
            console.log(e);
            // this.setState({
            //     date:new Date(),
            //     creators:createCommentaire
            // })
        })
        .catch(err => {
            console.log({err});
        })
    }
    render() {
        const { commentaire, date, creator, creators } = this.state;
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
                        label="Commentaire" variant="outlined" 
                        type={'name'} fullWidth
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
