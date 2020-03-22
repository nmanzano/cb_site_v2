import React from 'react';
import classes from './CenterCard.module.css';
import { Container } from 'react-bootstrap';

const centercard = (props) => (
  <Container className={classes.Body}>
    {props.children}
  </Container>
)

export default centercard;
