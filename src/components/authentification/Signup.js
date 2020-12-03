import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import './Style.css';
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            nom:'',
            prenom:'',
            matricule:'',
            email:'',
            password:'',
            creator:' ',
            creators:[]
        }
    }

    componentDidMount(){
        this.setItems()
    }

    setItems(){
        axios.post('https://api.fordisco-ius.com/graphql', null, {
            params:{
                query: "query {classes {_id, nom} }"
            }
        }).then(({data:{data:{classes}}}) => {
            // console.log(classes[0]);
            this.setState({
                creators:classes
            }, () => this.setState({creator: classes[0]._id}))
            // this.props.history.push('/Verification')
        }).catch(err => {
            console.log({err});
        })
        // axios.post('http://localhost:8000/graphql', null, {
        //     params:{
        //         query: "query {classes {_id, nom} }"
        //     }
        // }).then(({data:{data:{classes}}}) => {
        //     // console.log(classes[0]);
        //     this.setState({
        //         creators:classes
        //     }, () => this.setState({creator: classes[0]._id}))
        //     // this.props.history.push('/Verification')
        // }).catch(err => {
        //     console.log({err});
        // })
    }
    
    onSubmit(){
        const {nom,prenom,matricule,email,password,creator, creators} = this.state;
        console.log(this.state);
        axios.post('https://api.fordisco-ius.com/graphql', null, {
            params:{
                query: "mutation {createUser(userInput:{nom:\""+nom+"\",prenom:\""+prenom+"\",matricule:\""+matricule+"\",email:\""+email+"\",password:\""+password+"\",creator:\""+creator+"\",isAdmin:\"n\",isAjout:\"n\"}){matricule nom prenom email creator}}"
            }, 
                headers:{
                    Authorization:'Bearer '+localStorage.getItem("Token")
                }
        // axios.post('http://localhost:8000/graphql', null, {
        //     params:{
        //         query: "mutation {createUser(userInput:{nom:\""+nom+"\",prenom:\""+prenom+"\",matricule:\""+matricule+"\",email:\""+email+"\",password:\""+password+"\",creator:\""+creator+"\",isAdmin:\"n\",isAjout:\"n\"}){matricule nom prenom email creator}}"
        //     }, 
        //         headers:{
        //             Authorization:'Bearer '+localStorage.getItem("Token")
        //         }
            
       
        }).then(({data:{data:{createUser: {nom,prenom,matricule,email,creator}}}}) => {
            if(nom && prenom && matricule && email && creator){
                axios.post('https://api.fordisco-ius.com/graphql',null, { 
                    params: {
                        query: "query {login(email:\""+email+"\",password:\""+password+"\"){ userId token isAdmin isAjout} }"
                    }
                })
                // axios.post('http://localhost:8000/graphql',null, { 
                //     params: {
                //         query: "query {login(email:\""+email+"\",password:\""+password+"\"){ userId token isAdmin isAjout} }"
                //     }
                // })
                .then(({data:{data:{login: {token, isAdmin, isAjout}}}}) => {
                    this.setState({
                        nom:'',
                        prenom:'',
                        matricule:'',
                        email:'',
                        password:'',
                        creator:creators[0]
                    })
                    localStorage.setItem('Token', token)
                    localStorage.setItem('isAdmin', isAdmin)
                    localStorage.setItem('isAjout', isAjout)
                    this.props.history.push('/Bienvenu')
                }).catch(err => {
                    console.log({err});
                })
            }
            
        }).catch(err => {
            console.log({err});
        })
    }

    onChange(e) {
        // console.log(e.target);
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const { 
            nom,
            prenom,
            matricule,
            email,
            password,
            creator,
            creators
        } = this.state;
        return (
            <div>
            <Navbar history = {this.props.history} />
            <Paper className={'papper'} elevation={1}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <Typography variant={'h5'} className={'titre'} align={"center"} color={"primary"}>
                            Créer un compte
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Nom"  
                        variant={"outlined"} 
                        value={nom}
                        type={'name'} fullWidth
                        name='nom'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Prénom" 
                        variant="outlined" 
                        value={prenom}
                        type={'name'} fullWidth
                        name='prenom'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Numéro d'inscription" 
                        variant="outlined" 
                        value={matricule}
                        type={'name'} fullWidth
                        name='matricule'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Select 
                            variant="outlined" 
                            // label="Classe" 
                            fullWidth 
                            value={creator} 
                            name='creator' 
                            onChange={this.onChange.bind(this)}
                        >
                            {
                                creators && creators.map(e => {
                                    return <MenuItem value={e._id} key={e._id}>
                                        {e.nom}
                                    </MenuItem>
                                })
                            }
                            
                        </Select>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Adresse e-mail" 
                        variant="outlined" 
                        type={'email'} fullWidth
                        value={email}
                        name='email'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Mot de passe" 
                        variant="outlined" 
                        type={'password'} fullWidth
                        value={password}
                        name='password'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Je confirme que toutes ces information sont vrai" />
                    </Grid>
                    {/* <Grid item md={6}>
                    </Grid> */}
                    <Grid item md={6} xs={12}>
                        <Button variant="contained" color="primary" 
                        onClick={this.onSubmit.bind(this)} fullWidth
                        >
                            S'authentifier
                        </Button>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Link to="/Signin">
                            <p>Déjà membre</p>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
            </div>
        );
    }
}

export default Signup