import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const ProjectCard = (props) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <a href={props.deployed} target="_blank" rel="noopener noreferrer">
            <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                ></CardMedia>
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"><a href={props.deployed} target="_blank" rel="noopener noreferrer">
                        {props.title}
                    </a></Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"><a href={props.github} target="_blank" rel="noopener noreferrer">
                    Project Github
                </a></Button>
                <Button size="small" color="primary"><a href={props.deployed} target="_blank" rel="noopener noreferrer">
                    Deployed Site
        </a></Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;