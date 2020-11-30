import React from 'react';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import Navbar from "../Navbar/Navbar";

import { getClasseQuery, createDevoirMutation } from "../../components/queries/queries";

//Client Apollo
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";

class AjoutTp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titre:'',
            matiere:'',
            contenu:'',
            date:new Date(),
            creator:''
        }
    }

    dispayClasses(){
        var data = this.props.getClasseQuery;
        // console.log(this.props);
        if(!data.loading){
            return data.classes && data.classes.map((classe, index) => {
                // console.log(classe.nom);
                return( <MenuItem key={index} value={classe._id}>
                    {classe.nom}
                </MenuItem>);
            });
        }else{
            return( <MenuItem>Loading....</MenuItem> );
        } 
    }

    onSubmit(e){
        e.preventDefault();
        this.props.createDevoirMutation({
            variables:{
                titre:this.state.titre,
                matiere:this.state.matiere,
                contenu:this.state.contenu,
                date:this.state.date,
                creator:this.state.creator
            }
        });
        this.props.history.push('/Tp');
    }
    

    updateContent = (value) => {
        // console.log(value);
        this.setState({ contenu: value });
      };

    render() {
        // console.log(this.props);
        return (
            <div className="mt-4">
            <Navbar history = {this.props.history} />
            <Container spacing={2} >
                <Typography variant="h5">
                    Ajout TP
                </Typography>
                <br/>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Titre du cours"  
                        variant={"outlined"} 
                        type={'text'} fullWidth
                        onChange={(e) => this.setState({ titre: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Select variant="outlined" 
                        label="Classe" fullWidth
                        onChange={(e) => this.setState({ creator: e.target.value })}
                        >
                            <MenuItem />
                            {this.dispayClasses()}
                        </Select>
                    </Grid>
                   
                    <Grid item md={4} xs={12} fullWidth>
                        <TextField id="outlined-basic" 
                        label="Matière"  
                        variant={"outlined"} 
                        type={'text'} fullWidth
                        onChange={(e) => this.setState({ matiere: e.target.value })}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>

                        <JoditEditor
                            editorRef={this.setRef}
                            value={this.state.contentu}
                            config={this.config}
                            onChange={this.updateContent}
                        />

                    </Grid>
                </Grid>
                <div>
                    
                </div>

                <Grid item md={6} xs={12}>
                    <Button variant="contained" color="primary" 
                    fullWidth onClick={this.onSubmit.bind(this)}
                    className="mt-4 mb-4"
                    >
                        Ajouter
                    </Button>
                </Grid>


            </Container>
            </div>
        );
    }
}

export default compose(
    graphql(getClasseQuery, {name:"getClasseQuery"}),
    graphql(createDevoirMutation, {name:"createDevoirMutation"})
)(AjoutTp)