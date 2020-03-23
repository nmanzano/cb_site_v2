import React, {Component} from 'react';
import classes from './NavigationItems.module.css';
import {Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class NavigationItems extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      height: 0,
      width: 0
    };
  }
  componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  toggleNavbar = (e) => {
    if (this.state.width <= 992 && e.detail === 'toogleBTN') {
      if (this.state.collapsed) {
        this.setState({
          collapsed: false
        });
      }
      else {
        this.setState({
          collapsed: true
        });
      }
    }
    if (this.state.width <= 992 && e.detail === 'changepage') {
      this.setState({
        collapsed: true
      });
    }
  }

  render(){
    const collapseStatus = this.state.collapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse show';
    return(
    <Navbar className={classes.NavBarStyle} expand="lg" bg="#f3f3f3" variant="light">
      <Navbar.Brand href="/" className={classes.NavigationItems}>CASSANDRA</Navbar.Brand>
      <Navbar.Toggle onClick={(e) => {this.toggleNavbar({detail: 'toogleBTN'})}} className={classes.NavBarMobile} aria-controls="responsive-navbar-nav" />
      <div className={`${collapseStatus}`} id="responsive-navbar-nav">
        <Nav className={classes.NavLink + " ml-auto"}>
          <NavLink to="/home" onClick={(e) => {this.toggleNavbar({detail: 'changepage'})}} className="nav-link">HOME</NavLink>
          <NavLink to="/instructional-design" onClick={(e) => {this.toggleNavbar({detail: 'changepage'})}} className="nav-link">INSTRUCTIONAL DESIGN</NavLink>
          <NavLink to="/technical-writing" onClick={(e) => {this.toggleNavbar({detail: 'changepage'})}} className="nav-link">TECHNICAL WRITING</NavLink>
          <NavLink to="/contact" onClick={(e) => {this.toggleNavbar({detail: 'changepage'})}} className="nav-link">CONTACT</NavLink>
        </Nav>
      </div>
    </Navbar>
    )
  }
}

export default NavigationItems;
