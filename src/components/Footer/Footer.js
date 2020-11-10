import React from 'react';
import Typography from '@material-ui/core/Typography';
import  useStyles from './Style';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";



export default function StickyFooter() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <Container>
                    <Typography>
                        Footer
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
