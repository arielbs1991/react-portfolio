import React from "react";
import { Container, Grid, Card } from '@material-ui/core';

const Portfolio = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <h1>My Portfolio</h1>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Portfolio;