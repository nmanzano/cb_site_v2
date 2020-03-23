import React, {Component} from 'react';
import classes from './ViewProjectLink.module.css'
import {Link, withRouter} from 'react-router-dom';

class ViewProjectLink extends Component {
  state ={
    titleHover: false,
    pdfLink: false,
    videoLink: false,
    externalLink: false,
    placeHolder: false,
  }

  onHover = (e) => {
    this.setState({ titleHover: true });
  }

  componentDidMount(){
    this.linkSrc = this.props.liknSrc
    if(this.linkSrc){
      if (this.linkSrc.includes('pdfs')) {
        this.setState({ pdfLink: true });
      }
      else if (this.linkSrc.includes('youtube')) {
        this.setState({ videoLink: true });
      }
      else {
        this.setState({ externalLink: true });
      }
    }else {
      this.setState({ placeHolder: true });
    }
  }

  render(){
    let typeOfLink;
    let cardContentDiv = (
        <div
          onMouseOver={this.onHover.bind(this)}
          onMouseLeave={() => this.setState({titleHover: false})}
          className={classes.FullOverlay}>
          <img src={this.props.cardImage} alt="?"></img>
        { this.state.titleHover ?
          <div
            className={classes.Viewproject}>
            <h3>View Project</h3>
        </div> : true }
      </div>
    )

    if (this.state.pdfLink) {
      typeOfLink =  (
          <Link
            to={{
              pathname: `/view-pdf/`,
              search: "?q=" + this.linkSrc
            }}
            target="_blank"
            rel="noopener noreferrer"
            >
            {cardContentDiv}
        </Link>)
    }
    if (this.state.videoLink){
      typeOfLink =(
        <div>
          <iframe title="How to Create a Course in Rise" className={classes.VideoStyle} src={this.linkSrc} frameBorder="0" allow="accelerometer;encrypted-media; gyroscope;" allowFullScreen></iframe>
      </div>)
      }
    if (this.state.externalLink) {
      typeOfLink = (
        <a
          href={this.linkSrc}
          target="_blank"
          rel="noopener noreferrer"
          >
          {cardContentDiv}
        </a> )
    }
    if (this.state.placeHolder) {
      typeOfLink = (
        <div>
          {cardContentDiv}
        </div> )
      }

    return(
      <div className={classes.Projectdesc}>
        {typeOfLink}
      </div>
    )
  }
}

export default withRouter(ViewProjectLink);
