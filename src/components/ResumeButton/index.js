import React from "react";
import { Container, Grid } from '@material-ui/core';

const ResumeButton = () => {

    return (
        <div>
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={12}>
                    <h1>Click to Download</h1>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>

                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default ResumeButton;