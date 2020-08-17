import React from "react";
import { Container, Grid, Card, Typography } from '@material-ui/core';
import ProjectCard from '../ProjectCard';


const Portfolio = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">My Portfolio</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <ProjectCard
                            title={project[0].title}
                            image={project[0].image}
                            github={project[0].github}
                            deployed={project[0].deployed}
                            description={project[0].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard
                            title={project[1].title}
                            image={project[1].image}
                            github={project[1].github}
                            deployed={project[1].deployed}
                            description={project[1].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard
                            title={project[2].title}
                            image={project[2].image}
                            github={project[2].github}
                            deployed={project[2].deployed}
                            description={project[2].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard
                            title={project[3].title}
                            image={project[3].image}
                            github={project[3].github}
                            deployed={project[3].deployed}
                            description={project[3].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard
                            title={project[4].title}
                            image={project[4].image}
                            github={project[4].github}
                            deployed={project[4].deployed}
                            description={project[4].description}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard
                            title={project[5].title}
                            image={project[5].image}
                            github={project[5].github}
                            deployed={project[5].deployed}
                            description={project[5].description}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Portfolio;