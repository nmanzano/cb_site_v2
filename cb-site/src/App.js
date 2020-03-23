import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Home from './components/Home/Home';
import InstructionalDesign from './containers/InstructionalDesign/InstructionalDesign';
import TechnicalWriting from './containers/TechnicalWriting/TechnicalWriting';
import Contact from './containers/Contact/Contact';
import PDFViewer from './components/PDFViewer/PDFViewer';
import './App.module.css';

class App extends Component {

  render(){
    return (
      <Aux>
        <Route path="/" exact component={WelcomePage}></Route>
        <Layout>
          <Switch>
            <Route path={["/", "/home"]} exact component={Home}></Route>
            <Route path="/technical-writing" exact component={TechnicalWriting}></Route>
            <Route path="/instructional-design" exact component={InstructionalDesign}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
          <Route path="/view-pdf" exact component={PDFViewer}></Route>
        </Layout>
      </Aux>
    );
  }
}

export default App;
