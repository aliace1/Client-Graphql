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
import axios from "axios";
import Navbar from "../Navbar/Navbar";

class ModifierTp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _id:'',
            titre:'',
            matiere:'',
            contenu:'',
            creator:' ',
            creators: []
        }
    }

    componentDidMount(){
        this.setItems()
        this.getDevoir()
    }

    setItems(){
        // axios.post('https://api.fordisco-ius.com/graphql', null, {
        //     params:{
        //         query: "query {classes {_id, nom} }"
        //     }
        // })
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query {classes {_id, nom} }"
            }
        })
        .then(({data:{data:{classes}}}) => {
            // console.log(classes[0]);
            this.setState({
                creators: classes
            }, () => this.setState({creator: classes[0]._id}))
        })
        .catch(err => {
            console.log({err});
        })
    }

    getDevoir(){
        // axios.post('https://api.fordisco-ius.com/graphql', null, {
        //     params:{
        //         query: "query{devoirs{_id, titre, matiere, contenu, date}}"
        //     },
        //     headers:{
        //         Authorization:'Bearer '+localStorage.getItem("Token")
        //     }
        // })
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "query{devoirs{_id, titre, matiere, contenu, date}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{devoirs}}}) => {
            // console.log(e);
            var stock = devoirs.filter(e => e._id === this.props.match.params.id)[0];
            if(stock){
                this.setState({
                    _id:stock._id,
                    titre:stock.titre,
                    matiere:stock.matiere,
                    contenu:stock.contenu,
                })
            }
        })
        .catch(err => {
            console.log({err});
        })
    }

    onSubmit(){
        const { titre, matiere, contenu, creators, _id } = this.state;
        // axios.post('https://api.fordisco-ius.com/graphql', null, {
        //     params:{
        //         query: "mutation {updateDevoir(devoirId:\""+_id+"\",titre:\""+titre+"\",matiere:\""+matiere+"\",contenu:\""+contenu+"\"){ titre matiere contenu date}}"
        //     },
        //     headers:{
        //         Authorization:'Bearer '+localStorage.getItem("Token")
        //     }
        // })
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "mutation {updateDevoir(devoirId:\""+_id+"\",titre:\""+titre+"\",matiere:\""+matiere+"\",contenu:\""+contenu+"\"){ titre matiere contenu date}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{createDevoir}}}) => {
            // console.log(data);
            this.setState({
                titre:'',
                matiere:'',
                contenu:'',
                date:new Date(),
                creator:creators[0]
            })
            this.props.history.push('/Tp')
        })
        .catch(err => {
            console.log({err});
        })
    }
    

    updateContent = (value) => {
        // console.log(value);
        this.setState({ contenu: value });
      };
    

    onChange = (e) => {
        // console.log(e);
        // const value = e.currentTarget.value;
        // this.setState({
        //     titre:value,
        //     matiere:value,
        //     date:new Date(),
        //     creator:value,
        // })
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        // console.log(this.props);
        const { titre, matiere, contenu, creator, creators } = this.state;
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
                        value={titre}
                        name='titre'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Select variant="outlined" 
                        label="Classe" fullWidth
                        value={creator}
                        name='creator' 
                        onChange={this.onChange.bind(this)}
                        >
                            {
                                creators && creators.map((e, index) => {
                                    return<MenuItem value={e._id} key={index}>
                                    {e.nom}
                                </MenuItem>
                                })
                            }
                        </Select>
                    </Grid>
                   
                    <Grid item md={4} xs={12} fullWidth>
                        <TextField id="outlined-basic" 
                        label="Matière"  
                        variant={"outlined"} 
                        type={'text'} fullWidth
                        value={matiere}
                        name='matiere'
                        onChange={this.onChange.bind(this)}
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        
                        <JoditEditor
                            editorRef={this.setRef}
                            value={this.state.contentu}
                            config={this.config}
                            onChange={this.updateContent}
                            name='contenu'
                            value={contenu}
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

export default ModifierTp