import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class Ajout extends Component {
    state = {
        branche : ["Droit general", "Droit public", "Droit privé"],
        mention : ["Licence 1 (L1)", "Licence 2 (L2)", "Licence 3 (L3)", "Master 1 (M1)", "Master 2 L2"],
        valeurBranche:"",
        valeurMention:"",
        typeArticle:["Cours" , "Travaux Pratique" , "Livres"]
    }
    render() {
        return (
            <Container>
                <Grid >

                </Grid>
            </Container>
        );
    }
}

export default Ajout;
