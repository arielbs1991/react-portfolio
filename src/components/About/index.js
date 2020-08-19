import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import Azteca from '../../images/azteca-pic.png';
import Sunglasses from '../../images/sunglasses.jpg';
require('./About.css');

const About = () => {

    return (
        <span>
            <Container
                component={'span'}
                maxWidth="lg">
                <Grid
                    component={'span'}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid component={'span'} item xs={12}>
                        <Typography
                            component={'span'}
                            variant={'h3'}
                        >Ariel Strayer
                        </Typography>
                    </Grid>
                    <Grid component={'span'} item xs={12}>
                        <Typography
                            component={'span'}
                            variant={'h5'}>
                            <em>Bringing Your Ideas to Life</em>
                        </Typography>
                    </Grid>
                    <Grid component={'span'} item xs={12}>
                        <Typography
                            component={'span'}
                            variant={'body1'}>
                            I received my Bachelor's Degree in Psychology from the University of Washington, and established my foundations in coding through UW/Trinity's full-time Coding Bootcamp. The combination of these passions: People - their preferences, the way they navigate their world, keeping customers engaged and satisfied, and Tech - rigorous logic with precise attention to detail, have given me a unique lens when it comes to tackling problems and building applications in the world of technology. While I am perfectly comfortable with HTML, CSS, vanilla JavaScript, jQuery, node.js, and other popular languages, my passion lies in database manipulation, bringing information together in the most usable way, and presenting it to the user in a tailored package with a bow.</Typography>
                    </Grid>

                    <Grid component={'span'} item xs={12} md={6}>
                        <img alt="profile of Ariel" className="aboutPhoto" src={Azteca} />
                    </Grid>
                    <Grid component={'span'} item xs={12} md={6}>
                        <img alt="road trip with the dog" className="aboutPhoto" src={Sunglasses} />
                    </Grid>
                </Grid>
            </Container>
        </span>
    )
}

export default About;