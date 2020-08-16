import React from "react";
import { Tab, Tabs, Box, AppBar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { EmojiEmotions, Apps, Mail, GetApp } from '@material-ui/icons';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import ResumeButton from '../ResumeButton';

const Menu = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`nav-tabpanel-${index}`}
                aria-labelledby={`nav-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `nav-tab-${index}`,
            'aria-controls': `nav-tabpanel-${index}`,
        };
    }

    function LinkTab(props) {
        return (
            <Tab
                component="a"
                onClick={(event) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab icon={<EmojiEmotions />} label="ABOUT" href="/about" {...a11yProps(0)} />
                    <LinkTab icon={<Apps />} label="PORTFOLIO" href="/portfolio" {...a11yProps(1)} />
                    <LinkTab icon={<Mail />} label="CONTACT" href="/contact" {...a11yProps(2)} />
                    <LinkTab icon={<GetApp />} label="RESUME" href="/resume" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <About />
        </TabPanel>
            <TabPanel value={value} index={1}>
                <Portfolio />
        </TabPanel>
            <TabPanel value={value} index={2}>
                <Contact />
        </TabPanel>
            <TabPanel value={value} index={3}>
                <ResumeButton />
        </TabPanel>
        </div>
    );
};

export default Menu;