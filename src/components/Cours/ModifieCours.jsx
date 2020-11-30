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
import Button from "@material-ui/core/Button";
import Navbar from "../Navbar/Navbar";

import { getClasseQuery, getCoursQuery, updateArticleMutation } from "../../components/queries/queries";

//Client Apollo
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";


class ModifieCours extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _id:'',
            titre:'',
            matiere:'',
            contenu:'',
            creator:' '
        }
    }

    displayClasses(){
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

    displaytLivre(){
        var stock = this.props.getCoursQuery;
        console.log(this.props);
    }

    // getLivre(){
    //     axios.post('http://localhost:8000/graphql', null, {
    //         params:{
    //             query: "query{articles{_id, titre, matiere, contenu, date}}"
    //         },
    //         headers:{
    //             Authorization:'Bearer '+localStorage.getItem("Token")
    //         }
    //     })
    //     .then(({data:{data:{articles}}}) => {
    //         // console.log(lovres);
    //         var stock = articles.filter(e => e._id === this.props.match.params.id)[0];
    //         // console.log(stock, this.props.match.params.id);
    //         if(stock){
    //             this.setState({
    //                 _id:stock._id,
    //                 titre:stock.titre,
    //                 matiere:stock.matiere,
    //                 contenu:stock.contenu,
    //             })
    //         }
    //         // this.props.history.pop()
    //     })
    //     .catch(err => {
    //         console.log({err});
    //     })
    // }

    onSubmit(e){
        console.log(updateArticleMutation);
        e.preventDefault();
        this.props.updateArticleMutation({
            variables:{
                titre:this.state.titre,
                matiere:this.state.matiere,
                contenu:this.state.contenu,
                date:this.state.date,
                creator:this.state.crator
            }
        });
        this.props.history.push('/Cours');
    }
    
    updateContent = (value) => {
        // console.log(value);
        this.setState({ contenu: value });
      };

    render() {
        console.log(this.props.getCoursQuery);
        return (
            <div className="mt-4"> 
            <Navbar history = {this.props.history} />
            <Container spacing={2} >
                <Typography variant="h5">
                    Modifier article
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
                                {this.displayClasses()}
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
                        Modifier
                    </Button>
                </Grid>


            </Container>
            </div>
        );
    }
}

export default compose(
    graphql(getClasseQuery, {name: "getClasseQuery"}),
    graphql(getCoursQuery, {name: "getCoursQuery"}),
    graphql(updateArticleMutation, {name: "updateArticleMutation"})
)(ModifieCours)