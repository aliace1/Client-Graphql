import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import axios from "axios";
import Navbar from "../Navbar/Navbar";


class LivreDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            creator:' ',
            creators: [],
            datas:{}
        }
    }

    componentDidMount(){
        this.getLivres()
    }

    getLivres(){
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
            this.setState({
                datas: stock2
            })
        })
        .catch(err => {
            console.log({err});
        })
    }

    render() {
        // console.log(this.props);
        const { titre, matiere, contenu } = this.state.datas;
        return (
            <div>
            <Navbar history = {this.props.history} />
            <Container spacing={2} >
                <Typography variant="h5">
                    Details du livre
                </Typography>
                <br/>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <TextField id="outlined-basic" 
                        label="Titre du livre"  
                        variant={"outlined"} 
                        type={'text'} fullWidth
                        value={titre}
                        name='titre'
                        />
                    </Grid>
                   
                    <Grid item md={4} xs={12} fullWidth>
                        <TextField id="outlined-basic" 
                        label="Matière"  
                        variant={"outlined"} 
                        type={'text'} fullWidth
                        value={matiere}
                        name='matiere'
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <CKEditor
                            editor={ClassicEditor}
                            data={this.state.datas.contenu}
                            name='contenu'
                            value={contenu}
                        />

                    </Grid>
                </Grid>
                <div>
                    
                </div>

                {/* <Grid item md={6} xs={12}>
                    <Button variant="contained" color="primary" fullWidth>
                        Modifier
                    </Button>
                </Grid> */}


            </Container>
            </div>
        );
    }
}

export default LivreDetails