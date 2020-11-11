import React, {Component} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#63a4ff",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class Verification extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas:[],
            stocks:[]
        }
    }
    componentDidMount(){
        this.getClasse()
        this.getData()
    }

    getClasse(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query:"query {classes {_id, nom} }"
            },
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('Token')
            }
        }).then(e => {
            // console.log(e.data.data);
            this.setState({
                stocks:e.data.data.classes
            })
        }).catch(e=> console.log({e}))
    }

    setFilter(id){
        const stock = this.state.stocks.filter((e) => {
            return e._id === id
        })
        return stock.length > 0 ? stock[0].nom:""
    }

    getData(){
        axios.post('http://localhost:8000/graphql', null, {
            params:{
                query:"query {users {_id, nom, prenom, matricule, email, creator, isAjout} }"
            },
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('Token')
            }
        })
        .then(e=>{
            // console.log(e)
            this.setState({
                datas:e.data.data.users
            })
        })
        .catch(e=>console.log({e}))
    }

    onClick(id){
        const verif = this.state.datas.filter(e => {
            return e._id === id
        })
        if(verif.length > 0){
            const a = verif[0]
            console.log(a);
            const isAj = a.isAjout==='y'?'n':'y'
            const query = "mutation{ updateUser(userId:\""+a._id+"\",nom:\""+a.nom+"\",prenom:\""+a.prenom+"\",matricule:\""+a.matricule+"\",email:\""+a.email+"\",isAdmin:\""+a.isAdmin+"\",isAjout:\""+isAj+"\"){nom prenom matricule email password isAjout creator}}"
            // console.log(query);
            axios.post('http://localhost:8000/graphql', null, {
                params:{
                    query
                }
            })
            .then(({data:{data:{updateUser}}}) => {
                // console.log(data);
                this.setState({
                    datas:[...this.state.datas.filter(e => e._id !== id), updateUser]
                })
            })
            .catch(err => {
                console.log({err});
            })
        }
    }

    render() {
        const { datas } = this.state;
        return (
            <div className={'test'}>
                <Navbar history = {this.props.history} />
                <Paper>
                    <TableContainer /*component={'papper'}*/>
                        <Table stickyHeader className={"classes.table"} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>N° Immatricule</StyledTableCell>
                                <StyledTableCell align="left">Nom</StyledTableCell>
                                <StyledTableCell align="left">Prénom</StyledTableCell>
                                <StyledTableCell align="left">Adresse e-mail</StyledTableCell>
                                <StyledTableCell align="left">Classe</StyledTableCell>
                                <StyledTableCell align="center">Action 1</StyledTableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody >

                                {
                                    datas && datas.map(e => {
                                        return(
                                            <StyledTableRow key={e.id} >
                                                <StyledTableCell align="left"> {e.matricule} </StyledTableCell>
                                                <StyledTableCell align="left"> {e.nom} </StyledTableCell>
                                                <StyledTableCell align="left"> {e.prenom} </StyledTableCell>
                                                <StyledTableCell align="left"> {e.email} </StyledTableCell>
                                                <StyledTableCell align="left"> {this.setFilter(e.creator)} </StyledTableCell>
                                                <StyledTableCell align="left">
                                                    <Grid>{
                                                        e.isAjout === "y"?<Button variant="contained" color="primary" fullWidth onClick={this.onClick.bind(this, e._id)}>
                                                        Desactiver
                                                    </Button>:<Button variant="contained" color="primary" fullWidth onClick={this.onClick.bind(this, e._id)}> 
                                                            Activer
                                                        </Button>
                                                    }
                                                        
                                                    </Grid>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        )
                                    })
                                }
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        );
    }
}

export default Verification
