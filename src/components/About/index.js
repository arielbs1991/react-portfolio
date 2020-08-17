import React from "react";
import { Container, Grid, Card, Typography } from '@material-ui/core';
import AztecaAriel from '../../images/azteca-pic.png';
import SunglassesAriel from '../../images/sunglasses.jpg';
require('./About.css');

const About = () => {

    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">About Me</Typography>
                        <Typography variant="h5"><em>Bringing Your Ideas to Life</em></Typography>
                        <Typography variant="body1">I received my Bachelor's Degree in Psychology from the University of Washington, and established my foundations in coding through UW/Trinity's full-time Coding Bootcamp. The combination of these passions: People - their preferences, the way they navigate their world, keeping customers engaged and satisfied, and Tech - rigorous logic with precise attention to detail, have given me a unique lens when it comes to tackling problems and building applications in the world of technology. While I am perfectly comfortable with HTML, CSS, vanilla JavaScript, jQuery, node.js, and other popular languages, my passion lies in database manipulation, bringing information together in the most usable way, and presenting it to the user in a tailored package with a bow.</Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <img alt="profile of Ariel" className="aboutPhoto" src={AztecaAriel} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img alt="road trip with the dog" className="aboutPhoto" src={SunglassesAriel} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;