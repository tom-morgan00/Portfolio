import { Card, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Title from './Title';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  card: {
    height: '100%',
    textAlign: 'center',
    fontFamily: 'Lato',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '80%',
  },
});
export default function Skills({ data }) {
  const classes = useStyles();
  if (data) {
    var { skills } = data;

    const renderLogo = (arr) => {
      return arr.map(({ name, image }) => {
        return (
          <Grid key={name} item xs={4} sm={3} md={2}>
            <Card className={classes.card}>
              <div style={{ paddingBottom: '10px' }}>
                <img
                  src={`images/logos/${image}`}
                  alt={name}
                  className={classes.image}
                />
              </div>
              <h6>{name}</h6>
            </Card>
          </Grid>
        );
      });
    };
    var frontend = renderLogo(skills.frontend);
    var backend = renderLogo(skills.backend);
    var other = renderLogo(skills.other);
  }
  return (
    <section id="skills">
      <div className="skills__container">
        <Title title="skills" color="#121212" />

        <section className="skills__section">
          <h3>Frontend</h3>
          <Grid container spacing={5}>
            {frontend}
          </Grid>
        </section>

        <section className="skills__section">
          <h3>Backend</h3>
          <Grid container spacing={5}>
            {backend}
          </Grid>
        </section>

        <section className="skills__section">
          <h3>Other</h3>
          <Grid container spacing={5}>
            {other}
          </Grid>
        </section>
      </div>
    </section>
  );
}
