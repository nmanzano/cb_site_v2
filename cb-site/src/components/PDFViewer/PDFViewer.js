import React from "react";
import {withRouter} from 'react-router-dom';
import queryString from 'query-string'
import classes from './PDFViewer.module.css';



class PDFViewer extends React.Component {

    UNSAFE_componentWillMount (){
      this.pdfSource = queryString.parse(this.props.location.search).q;
    }

    render() {
      return (
        <div className={classes.Body}>
        <iframe
        title={this.pdfSource}
        src={this.pdfSource}
        width="100%"
        height="100%"
        >
        </iframe>
        </div>
      );
    }
  }

export default withRouter(PDFViewer);
