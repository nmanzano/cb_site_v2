import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';

const toolbar = (props) => {
  return(
    <Aux>
      <div className={classes.FixedHeader}></div>
      <header className={classes.stickyHeader}>
        <nav className={classes.NavbarPosition}>
          <NavigationItems></NavigationItems>
        </nav>
      </header>
    </Aux>
  )
}

export default toolbar;
