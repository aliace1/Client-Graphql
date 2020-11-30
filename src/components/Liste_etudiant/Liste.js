import React, {Component} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
// import DeleteIcon from '@material-ui/icons/Delete';
// import Chip from "@material-ui/core/Chip";
// import list from "./liste_demo";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
// import EditIcon from '@material-ui/icons/Edit';
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

class Liste extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas:[],
            stocks:[]
        }
    }
    componentDidMount(){
        this.getList()
        this.getClasse()
    }

    getClasse(){
        axios.post('https://api.fordisco-ius.com/graphql', null, {
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

    getList(){
        axios.post('https://api.fordisco-ius.com/graphql', null, {
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
                datas:e.data.data.users.filter(e => e.isAjout ==='y')
            })
        })
        .catch(e=>console.log({e}))
    }

    render() {
        const { datas } = this.state
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
                                <StyledTableCell align="center">Action 2</StyledTableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody >
                                {
                                    datas && datas.map(e => {
                                        return(
                                            <StyledTableRow key={e.id}>
                                                <StyledTableCell align="left"> {e.matricule} </StyledTableCell>
                                                <StyledTableCell align="left"> {e.nom} </StyledTableCell>
                                                <StyledTableCell align="left"> {e.prenom} </StyledTableCell>
                                                <StyledTableCell align="left"> {e.email} </StyledTableCell>
                                                <StyledTableCell align="left"> {this.setFilter(e.creator)} </StyledTableCell>
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

export default Liste
