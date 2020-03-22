import React from 'react';
import classes from './RightCard.module.css';
import { Container } from 'react-bootstrap';

const rightcard = (props) => (
  <Container className={classes.Body}>
    <div className={classes.RightFiller}></div>
    {props.children}
    <div className={classes.MainTitleParentDiv}>
      <div className={classes.MainTitleWrapper}>
        <p style={props.headingTop} className={classes.MainTitle}>{props.mainTitle}</p>
      </div>
    </div>
  </Container>
)

export default rightcard;
