import React from "react";
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import resume from '../../condensed_resume.pdf';
import resumeP1 from '../../images/condensed_resume.png';
import resumeP2 from '../../images/resumepg2.png';
require('./ResumeButton.css');

const ResumeButton = () => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
        },


    }));

    const classes = useStyles();

    return (
        <div>
            <Container
                maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            center
                        // startIcon={<CloudDownloadIcon />}
                        >
                            <a href='/resume/devresume2020.pdf' download="astrayer_resume.pdf" target="_blank">
                                Download PDF
                        </a>
                        </Button>
                    </Grid>
                    {/* <Grid
                        item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            center
                        // startIcon={<CloudDownloadIcon />}
                        >
                            <a href='/resume/devresume2020.zip' download="astrayer_resume.zip" target="_blank">
                                Download Zip File
                        </a>
                        </Button>
                    </Grid> */}
                    <Grid item xs={12} me={12} lg={8}>
                        <img alt="page one of resume, I apologize for not having a pdf" className="resume" src={resumeP1}></img>
                    </Grid>
                    {/* <Grid item xs={12} me={12} lg={6}>
                        <img alt="page two of resume, I apologize for not having a pdf" className="resume" src={resumeP2}></img>
                    </Grid> */}
                </Grid>
            </Container>
        </div>
    )
}

export default ResumeButton;