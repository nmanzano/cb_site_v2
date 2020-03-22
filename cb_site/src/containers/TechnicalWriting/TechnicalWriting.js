import React, {Component} from 'react';
import classes from './TechnicalWriting.module.css'
import { Row, Col } from 'react-bootstrap';
import Aux from '../../hoc/Aux/Aux.js'

import CenterCard from '../../components/Cards/CenterCard/CenterCard';
import LeftCard from '../../components/Cards/LeftCard/LeftCard';
import RightCard from '../../components/Cards/RightCard/RightCard';

import portfolio_examples from '../../assets/images/portfolio_examples.png'
import projectproposal_staar from '../../assets/images/ProjectProposal_staar.png'
import projectproposal_phases from '../../assets/images/ProjectProposal_phases.png'
import usermanual_intro from '../../assets/images/usermanual_intro.png'
import user_manual_continue from '../../assets/images/user_manual_continue.png'
import job_description from '../../assets/images/job_description.png'
import jobaids from '../../assets/images/jobaids.png';
import ViewProjectLink from "../ViewProjectLink/ViewProjectLink";

class TechnicalWriting extends Component{

  render(){
    return(
      <Aux>
        <div className={classes.Intro}>
          <div className={classes.PortfolioTitle}>
            <p>PORTFOLIO</p>
          </div>
          <CenterCard>
              <Row className="justify-content-center">
                <Col xs="11" md="10" lg="6" className={classes.PtDiv}>
                  <ul>
                    <li><h4>Storyboarding</h4></li>
                  <li><strong>Audience:</strong> Instructional Designers, Trainers</li>
                    <li>Date: 2019</li>
                    <li>Role: Instructional Designer</li>
                    <li>Medium: Google Doc</li>
                    <li>Tools: Google Suite</li>
                  </ul>
                  <ViewProjectLink
                    cardImage={portfolio_examples}
                    >
                  </ViewProjectLink>
                </Col>
                <Col xs="11" md="10" lg="6" className={classes.PtDiv}>
                  <ViewProjectLink
                    cardImage={portfolio_examples}
                    >
                  </ViewProjectLink>
                  <ul className={classes.CurriculumStyle}>
                    <li><h4>Curriculum Writing</h4></li>
                  <li><strong>Audience:</strong> Instructional Designers, Curriculum Department</li>
                    <li>Date: 2017</li>
                    <li>Role: Curriculum Developer</li>
                    <li>Medium: Schoology</li>
                    <li>Tools: Microsoft Office, Schoology</li>
                  </ul>
                </Col>
              </Row>
          </CenterCard>
        </div>
        <div className={classes.ProjectProposal}>
          <LeftCard
            mainTitle='Project Proposal'
            >
            <Row className="justify-content-center">
              <Col xs="11" md="10" lg="6" className={classes.PtDiv}>
                <h4>Project Management Plan: English</h4>
                <h4>STAAR Boocamp</h4>
                <ViewProjectLink
                  cardImage={projectproposal_staar}
                  liknSrc='/pdfs/ProjectPlan.pdf'
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="11" md="10" lg="6" className={classes.PtDiv}>
                <ViewProjectLink
                  cardImage={projectproposal_phases}
                  liknSrc='/pdfs/ProjectPlan.pdf'
                  >
                </ViewProjectLink>
                <ul>
                  <li><strong>Audience:</strong> Harker Heights High School Administration</li>
                  <li>Date: 2017</li>
                  <li>Role: Project Manager, Technical Writer</li>
                  <li>Medium: Formally Written Proposal</li>
                  <li>Tools: Adobe Create Suite, Turnitin, LucidChart, Scoro</li>
                </ul>
              </Col>
            </Row>
          </LeftCard>
        </div>
        <div className={classes.UserManual}>
          <RightCard
            mainTitle="User Manual"
            >
            <Row className="justify-content-center">
              <Col xs="11" md="10" lg="5" className={classes.PtDiv}>
                <ViewProjectLink
                  cardImage={usermanual_intro}
                  liknSrc='/pdfs/DEVELOPING_A_USER_MANUAL.pdf'
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="11" md="10" lg="5" className={classes.PtDiv}>
                <ViewProjectLink
                  cardImage={user_manual_continue}
                  liknSrc='/pdfs/DEVELOPING_A_USER_MANUAL.pdf'
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="11" md="10" lg="12" className={classes.PtDiv}>
                <ul>
                  <li><strong>Audience:</strong> Graduate Students</li>
                  <li>Date: 2019</li>
                  <li>Role: Technical Writer, Curriculum Developer</li>
                  <li>Medium: PDF</li>
                  <li>Tools: Blackboard, Adobe Creative Suite, Grammerly, Curriculum Mapping</li>
                </ul>
              </Col>
            </Row>
          </RightCard>
        </div>
        <div className={classes.JobDescription}>
          <LeftCard
            mainTitle="Job Description"
            >
            <Row className="justify-content-center">
              <Col xs="11" md="9" lg="6" className={classes.PtDiv}>
                <ViewProjectLink
                  cardImage={job_description}
                  liknSrc='/pdfs/HOMEBOUND_TEACHER.pdf'
                  >
                </ViewProjectLink>
              </Col>
              <Col xs="11" md="10" lg="5" className={classes.PtDiv}>
                <ul>
                  <li>
                    <h4>Job Description and Expectations</h4>
                  </li>
                  <li><strong>Audience:</strong> Homebound Teachers at Harker Heights High School</li>
                  <li>Date: 2018</li>
                  <li>Role: Project Manager, Technical Writer</li>
                  <li>Medium: PDF</li>
                  <li>Tools: Adobe Creative Suite, Microsoft Office, Trello, Remind</li>
                </ul>
                </Col>
              </Row>
            </LeftCard>
          </div>
        <div className={classes.JobAids}>
          <RightCard
            mainTitle="Job Aids"
            >
            <Row className="justify-content-center">
              <Col xs="11" md="10" lg="4" className={classes.PtDiv}>
                <ul>
                  <li><h4>How to Request a Substitute</h4></li>
                  <li><strong>Audience:</strong> New Teachers at Georgetown High School</li>
                  <li>Date: 2018</li>
                  <li>Role: Technical Writer</li>
                  <li>Medium: PDF</li>
                  <li>Tools: Google Classroom, Google Suite</li>
                </ul>
              </Col>
              <Col xs="11" md="8" lg="6" xl="5" className={classes.PtDiv}>
                <ViewProjectLink
                  cardImage={jobaids}
                  liknSrc='/pdfs/SUBSTITUTE_SYSTEM.pdf'
                  >
                  </ViewProjectLink>
              </Col>
            </Row>
          </RightCard>
        </div>
      </Aux>
    )
  }

}

export default TechnicalWriting;
