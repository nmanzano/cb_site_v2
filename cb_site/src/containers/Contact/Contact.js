import React, { Component } from "react";
import {Row, Col, Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

import classes from './Contact.module.css';
import Aux from '../../hoc/Aux/Aux.js'
import contact_picture from '../../assets/images/contact_picture.jpg';

class Contact extends Component {

  state = {
    data: null
  };

  handleSubmit(e){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    e.preventDefault();
    axios({
      method: "POST",
      url:"/send-email",
      data: {
        name: name,
        email: email,
        message: message,
      }
    })
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <Aux>
        <div className={classes.ContactTitle}>
          <p>LET'S CONNECT</p>
        </div>
        <Container className={classes.ContactBody}>
          <Row className={classes.ContactRow}>
            <Col md="12" lg="6" className={classes.ContactPictureCol}>
              <div className={classes.ContactPicture}>
                <img src={contact_picture} alt="" />
              </div>
            </Col>
            <Col md="12" lg="6" className={classes.ContactFieldsCol}>
              <div className={classes.ContactCard}>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                      <input type="text" className="form-control" id="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows="5" id="message" placeholder="Write your message" ></textarea>
                    </div>

                  <Button className={classes.ButtonStyle + " col-sm-12 col-lg-4"} variant="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default Contact;
