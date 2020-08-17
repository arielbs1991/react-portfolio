import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, Typography, IconButton } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';



const FacebookCard = () => {
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
                <IconButton aria-label="facebook">
                <a href="https://www.facebook.com/ariel.strayer" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </a>
                </IconButton>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Find me on Facebook
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                <a href="https://www.facebook.com/ariel.strayer" target="_blank" rel="noopener noreferrer">
                Take a Look
                </a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default FacebookCard;