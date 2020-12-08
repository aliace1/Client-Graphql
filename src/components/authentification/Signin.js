import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import "./Style.css"
import theme from "../../Theme";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        }
    }
    onSubmit(){
        const {email, password} = this.state
        axios.post('https://api.fordisco-ius.com/graphql',null, { 
            params: {
                query: "query {login(email:\""+email+"\",password:\""+password+"\"){ userId token isAdmin isAjout} }"
              }
        }).then(({data:{data:{login: {token, isAdmin, isAjout}}}}) => {
            localStorage.setItem('Token', token)
            localStorage.setItem('isAdmin', isAdmin)
            localStorage.setItem('isAjout', isAjout)
            this.props.history.push('/')
        }).catch(err => {
            console.log({err});
        })
        // axios.post('http://localhost:8000/graphql',null, { 
        //     params: {
        //         query: "query {login(email:\""+email+"\",password:\""+password+"\"){ userId token isAdmin isAjout} }"
        //       }
        // }).then(({data:{data:{login: {token, isAdmin, isAjout}}}}) => {
        //     localStorage.setItem('Token', token)
        //     localStorage.setItem('isAdmin', isAdmin)
        //     localStorage.setItem('isAjout', isAjout)
        //     this.props.history.push('/')
        // }).catch(err => {
        //     console.log({err});
        // })
    }

    onCHange (e) {
        // console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }

    handleClickShowPassword(){
        this.setState({showPassword: !this.state.showPassword});
    }
    handleMouseDownPassword(event) {
        event.preventDefault();
      };

    render() {
        return (
            <div className="sign-in" theme = {theme}>
                <Navbar history = {this.props.history} />
                <Paper elevation={2} className={'papper'}>
                    <Grid container spacing={2}>
                        <Typography variant={'h5'} className={'titre'} align={"center"} color={"primary"}>
                            Connexion
                        </Typography>
                        <Grid item xs={12}>
                            <TextField 
                            id="outlined-basic" 
                            label="Adresse e-mail" variant="outlined" type={'name'} required fullWidth
                            name='email'
                            onChange={this.onCHange.bind(this)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" 
                            label="Mot de passe" variant="outlined" 
                            type={this.showPassword ? 'text' : 'password'} required fullWidth
                            name='password'
                            onChange={this.onCHange.bind(this)}
                            >
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword.bind(this)}
                                    onMouseDown={this.handleMouseDownPassword.bind(this)}
                                    >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Link to="/Signup">
                                <p>S'enregistrer</p>
                            </Link>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Button variant="contained" onClick={this.onSubmit.bind(this)} color={"primary"} fullWidth>
                                Se connecter
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default Signin;
