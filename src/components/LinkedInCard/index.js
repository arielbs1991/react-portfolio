import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, Typography, IconButton } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';



const LinkedInCard = () => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <IconButton aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/ariel-strayer-28640b190/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </a>
                </IconButton>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Connect with me on LinkedIn
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                <a href="https://www.linkedin.com/in/ariel-strayer-28640b190/" target="_blank" rel="noopener noreferrer">
                Take a Look
                </a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default LinkedInCard;