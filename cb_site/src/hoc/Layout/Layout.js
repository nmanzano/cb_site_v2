import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () =>{
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render(){
    return(
      <Aux>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <Footer></Footer>
      </Aux>
    )
  }
}

export default Layout;
