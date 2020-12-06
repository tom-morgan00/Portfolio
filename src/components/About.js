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
    textAlign: 'center',
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
    var { personal, contact, education } = data;
    // var name = this.props.data.name;
    // var profilepic = 'images/' + this.props.data.image;
    // var bio = this.props.data.bio;
    // var street = this.props.data.address.street;
    // var city = this.props.data.address.city;
    // var state = this.props.data.address.state;
    // var zip = this.props.data.address.zip;
    // var phone = this.props.data.phone;
    // var email = this.props.data.email;
    // var resumeDownload = this.props.data.resumedownload;
  }

  return (
    <section id="about" className={classes.root}>
      <div className="about__container">
        <Title title="about" color="#ddd" />
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <div className={`image ${classes.image}`}>
              <img
                src={`images/${personal.image}`}
                alt={`photo of ${personal.name}`}
              />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className={classes.info}>
              <p>{personal.bio}</p>
              <br />
              <p>{personal.status}</p>
              <br />
              <a href="images/Thomas_MorganDV.pdf" download>
                <Button variant="outlined" size="medium" color="primary">
                  Download CV
                </Button>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
