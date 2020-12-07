import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  heroContent: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    textShadow: '3px 1px rgba(0,0,0,0.5)',
  },
  heroLinks: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialLinks: {
    fontSize: '30px',
    color: '#fff',
    padding: '20px',
    '&:hover': {
      color: '#ccc',
    },
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: '18px 36px',
    color: '#fff',
    border: '1px solid #fff',
    '&:hover': {
      color: '#232323',
      backgroundColor: '#fff',
      fontWeight: 'bold',
      border: 'none',
    },
  },
});

export default function HeroSection({ data }) {
  const classes = useStyles();
  if (data) {
    var { personal, social } = data;
    var socialLinks = social.map((social) => {
      return (
        <li key={social.name}>
          <a
            className={classes.socialLinks}
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            <i className={social.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <section id="hero-section">
      <Container maxWidth="md">
        <div className={classes.heroContent}>
          <Typography
            style={{ marginBottom: '10px' }}
            variant="h1"
            component="h2"
            gutterBottom
          >
            {personal.name}.
          </Typography>
          <br />
          <Typography variant="h4" gutterBottom>
            {personal.occupation}.
          </Typography>
          <br />

          <section className={classes.heroLinks}>{socialLinks}</section>
          <br />

          <div className="projects-button">
            <a href="/#projects">
              <Button className={classes.button} variant="contained">
                View Projects
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
