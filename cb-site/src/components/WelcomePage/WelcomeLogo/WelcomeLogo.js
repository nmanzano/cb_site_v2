import React from 'react';
import classes from './WelcomeLogo.module.css';
import Aux from '../../../hoc/Aux/Aux';
import { Container, Row, Col } from 'react-bootstrap';

const welcomeLogo = (props) => (
  <Aux>
    <Container className={classes.ContainerColor}>
      <Row style={{zIndex:'0'}} className={classes.Box}></Row>
    <Row style={{zIndex:'2', paddingTop:'20px'}} className={"justify-content-center " + classes.MainTitle}><h1>CASSANDRA</h1></Row>
      <Row style={{zIndex:'2'}} className={"justify-content-sm-center " + classes.Subheadings}>
        <Col className={classes.Instructional}>INSTRUCTIONAL DESIGNER</Col>
        <Col xs md="1" className={classes.DotParent}><span className={classes.Dot}></span></Col>
        <Col className={classes.Trainer}>TRAINER</Col>
        <Col xs md="1" className={classes.DotParent}><span className={classes.Dot}></span></Col>
        <Col className={classes.Technical}>TECHNICAL WRITER</Col>
      </Row>
      <Row className={classes.Arrow}>
        <div></div>
      </Row>
    </Container>
  </Aux>
)

export default welcomeLogo;
