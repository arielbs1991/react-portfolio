import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, List, ListItem, } from '@material-ui/core';

const ContactCard = () => {
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
        subheadertext: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid constainer alignItems="center" className={classes.root}>
                    <List
                        component="nav"
                    >


                        <ListItem className={classes.subheadertext} component="div">
                            Contact Me Directly
                    </ListItem>

                        {/* className={classes.root} */}

                        {/* <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <MailOutline />
                            </ListItemIcon>
                            <ListItemText primary="By Email" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="ariel.strayer@gmail.com" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <Call />
                            </ListItemIcon>
                            <ListItemText primary="Google Voice" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="(206)705-3506" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <LocationOn />
                            </ListItemIcon>
                            <ListItemText primary="Where I'm Located" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Seattle, US" />
                                </ListItem>
                            </List>
                        </Collapse> */}
                    </List>
                    {/* <MailOutline>
                        <Box>
                            ariel.strayer@gmail.com
                    </Box>
                    </MailOutline>
                    <Divider orientation="vertical" flexItem />
                    <LocationOn label="Seattle, 98198, US" />
                    <Divider orientation="vertical" flexItem />
                    <Call label="(206)705-3506" />
                    <Divider orientation="vertical" flexItem /> */}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ContactCard;