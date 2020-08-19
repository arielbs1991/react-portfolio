import React, { useState } from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import { pdfjsLib, Document, Page } from 'react-pdf';
import resume from '../../srcresume.pdf';
import resumeP1 from '../../images/resumepg1.png';
import resumeP2 from '../../images/resumepg2.png';
require('./ResumeButton.css');

const ResumeButton = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <a href='/resume/devresume2020.pdf' download="astrayer_resume.pdf" target="_blank">
                            <Typography component={'span'} variant={'h5'}>Click to Download PDF</Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href='/resume/devresume2020.zip' download="astrayer_resume.zip" target="_blank">
                            <Typography component={'span'} variant={'h5'}>Click to Download Zip File</Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} me={12} lg={6}>
                        <img alt="page one of resume, I apologize for not having a pdf" className="resume" src={resumeP1}></img>
                    </Grid>
                    <Grid item xs={12} me={12} lg={6}>
                        <img alt="page two of resume, I apologize for not having a pdf" className="resume" src={resumeP2}></img>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Document
                            file={resume}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={console.error}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <Typography component={'span'} variant={'body2'}>
                            Page {pageNumber} of {numPages}
                        </Typography>
                    </Grid> */}
                </Grid>
            </Container>
        </div>
    )
}

export default ResumeButton;