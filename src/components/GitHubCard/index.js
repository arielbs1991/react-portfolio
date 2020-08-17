import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, Typography, IconButton } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';



const GitHubCard = () => {
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
                <IconButton aria-label="GitHub">
                <a href="https://github.com/arielbs1991" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </a>
                </IconButton>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                See more projects on Github
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                <a href="https://github.com/arielbs1991" target="_blank" rel="noopener noreferrer">
                Take a Look
                </a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default GitHubCard;