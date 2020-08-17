import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import BurgerBuilders from '../../images/burger-builders.png';
import DayScheduler from '../../images/day-scheduler.png';
import NoteTaker from '../../images/note-taker.png';
import RNGPassword from '../../images/rng-password.png';
import Wavel from '../../images/wavel.png';
import WineKey from '../../images/wine-key.png';

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
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                ><a href={props.deployed} target="_blank"></a></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"><a href={props.deployed} target="_blank">
                        {props.title}
                    </a></Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"><a href={props.github} target="_blank">
                    Project Github
                </a></Button>
                <Button size="small" color="primary"><a href={props.deployed} target="_blank">
                    Deployed Site
        </a></Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;