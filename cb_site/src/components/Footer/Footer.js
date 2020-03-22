import React from 'react';
import classes from './Footer.module.css'
import { FaLinkedin } from 'react-icons/fa';

const footer = (props) => (
  <footer className={classes.Footer}>
    <div className={classes.LinkDiv}>
    <a href="https://www.linkedin.com/in/cassandra-baker-2653bb186/"  target="_blank" rel="noopener noreferrer" className="btn btn-block btn-social btn-twitter">
      <h3> Let's Connect <FaLinkedin /></h3>
    </a>
  </div>
  </footer>
)

export default footer;
