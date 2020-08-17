import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import { MailOutline, Call, LocationOn } from '@material-ui/icons';
import GitHubCard from '../GitHubCard';
import FacebookCard from '../FacebookCard';
import LinkedInCard from '../LinkedInCard';

const Contact = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">Contact Me</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <FacebookCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <GitHubCard />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <LinkedInCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;