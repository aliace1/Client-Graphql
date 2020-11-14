import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Editor from '../Editor'
// import 'jodit';
// import 'jodit/build/jodit.min.css';
// import JoditEditor from "jodit-react";

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            titre:'',
            matiere:'',
            contenu:'',
            date:new Date(),
            creator:' ',
            creators: []
        }
    }

    componentDidMount(){
        this.setItems()
    }

    setItems(){
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

    onSubmit(){
        const { titre, matiere, contenu, date, creator, creators } = this.state;
        // console.log(creator);
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query: "mutation {createArticle(articleInput:{titre:\""+titre+"\",matiere:\""+matiere+"\",contenu:\""+contenu+"\",date:\""+date+"\",creator:\""+creator+"\"}){ titre matiere contenu date}}"
            },
            headers:{
                Authorization:'Bearer '+localStorage.getItem("Token")
            }
        })
        .then(({data:{data:{createArticle}}}) => {
            // console.log(data);
            this.setState({
                titre:'',
                matiere:'',
                contenu:'',
                date:new Date(),
                creator:creators[0]
            })
            this.props.history.push('/Cours')
        })
        .catch(err => {
            console.log({err});
        })
    }
    

    updateData = (event, editor) => {
        // console.log(editor);
        this.setState({
            contenu:editor.getData(),

        })
    }
    // SubmitEditor = (outPut) =>{
    //     // console.log(outPut)
    //     this.setState({
    //         contenu:outPut
    //     })
    // }

    onChange(e) {
        // console.log(e);
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        // console.log(this.props);
        const { titre, matiere, contenu, date, creator, creators } = this.state;
        return (
            <div>
            <Navbar history = {this.props.history} />
            <Container spacing={2} >
                <Typography variant="h5">
                    Ajout cours
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
                                creators && creators.map(e => {
                                    return<MenuItem value={e._id} key={e._id}>
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
                   
                        <CKEditor
                            editor={ClassicEditor}
                            data={this.state.contenu}
                            onChange={this.updateData.bind(this)}
                            name='contenu'
                            value={contenu}
                        />

                        {/* <Editor onSubmit={this.updateData.bind(this).bind(this)} value={contenu} className={'Editor'} onChange={this.onChange.bind(this)}/> */}

                    
                </Grid>
                <div>
                    
                </div>

                <Grid item md={6} xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={this.onSubmit.bind(this)}>
                        Ajouter
                    </Button>
                </Grid>


            </Container>
            </div>
        );
    }
}

export default Add