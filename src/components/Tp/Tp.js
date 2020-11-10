import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import './Style.css'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

class Tp extends Component {
    state = {
        cours: [
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum"

            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet,"

            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet,"
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            },
            {
                titre:"Les biens mobilier et immobilier",
                type:'Droit civil',
                branche:"Droit public",
                mention:"L1",
                date_ajout:"31-10-2020",
                auteur:"Jean Rak",
                content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                    " Amet aperiam autem consequuntur cum doloremque excepturi harum" +
                    " ipsa magnam molestiae mollitia placeat porro, quasi quisquam totam " +
                    "velit. Eius exercitationem magni mollitia.Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Amet aperiam autem consequuntur cum" +
                    " doloremque excepturi harum ipsa magnam molestiae mollitia placeat " +
                    "porro, quasi quisquam totam velit. Eius exercitationem magni mollitia."
            }
        ],
    }
    render() {
        return (
            <Container spacing={20} >
                <br/>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                >
                    <Grid item md={4} sm={12} edge={"start"} fullWidth>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={"button"}
                            startIcon={<AddIcon />}
                        >
                            <Link to="/Ajout_cours" >
                                Nouveau Traveau Pratique
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item md={4} sm={12} edge={"start"} fullWidth>
                        <InputBase
                            variant="outlined"
                            className={"classes.input"}
                            placeholder="Rechercher"
                            inputProps={{ 'aria-label': 'Rechercher' }}
                        />
                        <IconButton type="submit" className={"classes.iconButton"} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <br/>
                {
                    this.state.cours.map((cours, id) => (
                        <Card className={"root"} key={id}>
                            <CardHeader
                                title={cours.titre}
                                subheader={cours.date_ajout}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p" className={"contenu"}>
                                    {
                                        cours.content
                                    }
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Grid>
                                    <Grid item >
                                        <Button color="primary">
                                            Voir plus
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>

                        </Card>
                    ))
                }


            </Container>
        );
    }
}

export default Tp;
