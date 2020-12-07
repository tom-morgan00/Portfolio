import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    display: 'inline-block',
    padding: '10px',
    marginBottom: '30px',
  },
  info: {
    padding: '20px',
    fontSize: '1.3rem',
    lineHeight: '2rem',
    color: '#555',
    letterSpacing: '1px',
  },
}));

export default function About({ data }) {
  const classes = useStyles();
  if (data) {
    var { personal } = data;
  }

  return (
    <section id="about" className={classes.root}>
      <div className="about__container">
        <Title title="about" color="#ddd" />

        <div className={`image ${classes.image}`}>
          <img src={`images/${personal.image}`} alt={personal.name} />
        </div>

        <div className={classes.info}>
          <p>{personal.bio}</p>
          <br />
          <p>{personal.status}</p>
          <br />
          <a href="/cv/Thomas_MorganCV.pdf" download>
            <Button variant="outlined" size="medium" color="primary">
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
