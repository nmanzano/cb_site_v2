import React from 'react';
import classes from './WelcomePage.module.css';
import WelcomeLogo from './WelcomeLogo/WelcomeLogo';
import Aux from '../../hoc/Aux/Aux';

const welcomePage = (props) => (
  <Aux>
    <div className={classes.WelcomePage}>
      <WelcomeLogo></WelcomeLogo>
    </div>
  </Aux>
);

export default welcomePage;
