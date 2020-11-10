import React from 'react'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class Commentaire extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Typography variant={'h5'} className={'titre'}>
                        Commentaire :
                    </Typography>
                    <Grid item xs={12}>
                        <TextField 
                        id="outlined-basic" 
                        label="Commentaire" variant="outlined" 
                        type={'name'} fullWidth
                        />
                    </Grid>
                    <Grid item md={6} xs={6}>
                        <Button variant="contained" color={"primary"} fullWidth>
                            Commenter
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Commentaire
