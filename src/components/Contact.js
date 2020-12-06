import { Grid } from '@material-ui/core';
import React from 'react';
import Title from './Title';

export default function Contact({ data }) {
  if (data) {
    var { message, email, phone } = data.contact;
  }
  return (
    <section id="contact">
      <div className="contact__container">
        <Title title="contact" color="#ddd" />

        <section className="contact__section">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <div className="email">
                <a href={`mailto:${email}`}>
                  <i className="fas fa-envelope" />
                </a>
                <br />
                <br />
                <a href={`mailto:${email}`}>
                  <p>{email}</p>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="phone">
                <a href={`tel:${phone}`}>
                  <i className="fas fa-phone" />
                </a>
                <br />
                <br />
                <a href={`tel:${phone}`}>
                  <p>{phone}</p>
                </a>
              </div>
            </Grid>
          </Grid>
        </section>
        <p>{message}</p>
      </div>
    </section>
  );
}
