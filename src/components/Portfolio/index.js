import React from "react";
import { Container, Grid, Typography } from '@material-ui/core';
import ProjectCard from '../ProjectCard';
import project from "../../db/projects.json";
import BurgerBuilders from '../../images/burger-builders.png';
import DayScheduler from '../../images/day-scheduler.png';
import NoteTaker from '../../images/note-taker.png';
import RNGPassword from '../../images/rng-password.png';
import Wavel from '../../images/wavel.png';
import WineKey from '../../images/wine-key.png';
import Pawsitivity from '../../images/pawsitivity-home.png';


const Portfolio = () => {
    return (
        <span
        className="body"
        >
            <Container
            className="body"
                maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">Portfolio</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[0].title}
                            image={Pawsitivity}
                            github={project[0].github}
                            deployed={project[0].deployed}
                            description={project[0].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[1].title}
                            image={WineKey}
                            github={project[1].github}
                            deployed={project[1].deployed}
                            description={project[1].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[2].title}
                            image={Wavel}
                            github={project[2].github}
                            deployed={project[2].deployed}
                            description={project[2].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[3].title}
                            image={BurgerBuilders}
                            github={project[3].github}
                            deployed={project[3].deployed}
                            description={project[3].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[4].title}
                            image={NoteTaker}
                            github={project[4].github}
                            deployed={project[4].deployed}
                            description={project[4].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[5].title}
                            image={RNGPassword}
                            github={project[5].github}
                            deployed={project[5].deployed}
                            description={project[5].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[6].title}
                            image={DayScheduler}
                            github={project[6].github}
                            deployed={project[6].deployed}
                            description={project[6].description}
                        />
                    </Grid>
                </Grid>
            </Container>
        </span>
    )
}

export default Portfolio;