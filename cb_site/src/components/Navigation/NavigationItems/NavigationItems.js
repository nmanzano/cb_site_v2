import React, {Component} from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import {Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class NavigationItems extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar = (e) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render(){
    const collapsed = this.state.collapsed;
    const collapseStatus = collapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse show';
    return(
    <Navbar className={classes.NavBarStyle} expand="lg" bg="#f3f3f3" variant="light">
      <Navbar.Brand href="/" className={classes.NavigationItems}>CASSANDRA</Navbar.Brand>
      <Navbar.Toggle onClick={this.toggleNavbar} className={classes.NavBarMobile} aria-controls="responsive-navbar-nav" />
      <div className={`${collapseStatus}`} id="responsive-navbar-nav">
        <Nav className={classes.NavLink + " ml-auto"}>
          <NavLink to="/home" onClick={this.toggleNavbar} className="nav-link">HOME</NavLink>
          <NavLink to="/instructional-design" onClick={this.toggleNavbar} className="nav-link">INSTRUCTIONAL DESIGN</NavLink>
          <NavLink to="/technical-writing" onClick={this.toggleNavbar} className="nav-link">TECHNICAL WRITING</NavLink>
          <NavLink to="/contact" onClick={this.toggleNavbar} className="nav-link">CONTACT</NavLink>
        </Nav>
      </div>
    </Navbar>
    )
  }
}

export default NavigationItems;
