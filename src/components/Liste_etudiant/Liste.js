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
// import EditIcon from '@material-ui/icons/Edit';

//Clien Apollo Setup
// import { getRegistresQuery } from '../../queries/queries'
// import { graphql } from 'react-apollo';

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
    render() {
        return (
            <div className={'test'}>
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
                                <StyledTableRow >
                                    <StyledTableCell align="left">  </StyledTableCell>
                                    <StyledTableCell align="left">  </StyledTableCell>
                                    <StyledTableCell align="left">  </StyledTableCell>
                                    <StyledTableCell align="left">  </StyledTableCell>
                                    <StyledTableCell align="left">  </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        );
    }
}

export default Liste
