import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import GitHubCard from '../GitHubCard';
import FacebookCard from '../FacebookCard';
import LinkedInCard from '../LinkedInCard';
import ContactCard from '../ContactCard';
import EmailContactCard from '../EmailContactCard';
import PhoneContactCard from '../PhoneContactCard';
import LocationContactCard from '../LocationContactCard';

const Contact = () => {
    return (
        <span>
            <Container

                maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">Contact</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <LinkedInCard />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <GitHubCard />
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <FacebookCard />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <ContactCard />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <EmailContactCard />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <PhoneContactCard />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <LocationContactCard />
                    </Grid>
                </Grid>
            </Container>
        </span>
    )
}

export default Contact;