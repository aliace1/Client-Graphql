import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

class MenuPage extends Component {
    render() {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item >
                        <Typography variant={"h3"}>
                            Bienvenue dans <a href={"fordisco-ius.com"}> Fordisco-ius</a>
                        </Typography>
                        <Typography variant={"p"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam asperiores aspernatur beatae corporis cumque dignissimos
                            dolores doloribus ipsam iste nihil nobis, omnis, pariatur,
                            repudiandae veritatis voluptates? Cumque dolorem est veritatis?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam asperiores aspernatur beatae corporis cumque dignissimos
                            dolores doloribus ipsam iste nihil nobis, omnis, pariatur,
                            repudiandae veritatis voluptates? Cumque dolorem est veritatis?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam asperiores aspernatur beatae corporis cumque dignissimos
                            dolores doloribus ipsam iste nihil nobis, omnis, pariatur,
                            repudiandae veritatis voluptates? Cumque dolorem est veritatis?
                        </Typography>
                    </Grid>
                    <Grid>
                        <Grid item md={6} >
                            <Card className={"classes.root"}>
                                <CardActionArea>
                                    <CardMedia
                                        className={"classes.media"}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Acceder
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default MenuPage;
