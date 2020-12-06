import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Title from './Title';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});
export default function Projects({ data }) {
  const classes = useStyles();
  if (data) {
    var { projects } = data;
  }

  return (
    <section id="projects">
      <div className="projects__container">
        <Title title="projects" color="#121212" />

        <section className="projects__section">
          <Grid container spacing={5}>
            {projects.map((project) => {
              return (
                <Grid key={project.title} item xs={12} sm={12} md={6} lg={4}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image={`images/photo.jpg`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {project.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {project.technologies}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      {project.url.source ? (
                        <a href={project.url.source}>
                          <Button size="small" color="primary">
                            Source Code
                          </Button>
                        </a>
                      ) : null}
                      {project.url.demo ? (
                        <a href={project.url.demo}>
                          <Button size="small" color="primary">
                            Demo
                          </Button>
                        </a>
                      ) : null}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </section>
      </div>
    </section>
  );
}
