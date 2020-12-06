import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  heroContent: {
    textAlign: 'center',
    padding: '25% 0',
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
  },
});

export default function HeroSection({ data }) {
  const classes = useStyles();
  if (data) {
    var { personal, social } = data;
    var socialLinks = social.map((social) => {
      return (
        <li key={social.name}>
          <a className={classes.socialLinks} href={social.url}>
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
          <Typography variant="h4" gutterBottom>
            {personal.occupation}.
          </Typography>
          <section className={classes.heroLinks}>{socialLinks}</section>
        </div>
      </Container>
    </section>
  );
}
