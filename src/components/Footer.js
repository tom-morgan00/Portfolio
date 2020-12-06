import React from 'react';

export default function Footer({ data }) {
  if (data) {
    var socialLinks = data.social.map((social) => {
      return (
        <li className="footer__social-link" key={social.name}>
          <a href={social.url}>
            <i className={social.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer id="footer">
      <div className="footer__container">
        <section className="footer__social">{socialLinks}</section>
        <p>
          <small>
            <i className="fas fa-copyright" /> Copyright Thomas Morgan 2020
          </small>
        </p>
      </div>
    </footer>
  );
}
