import React from 'react';
import ProgramDescriptions from './ProgramDesc';
import { Row, Card, Col, Container } from 'react-bootstrap';
import './ProgramContent.css'

export const ProgramContent = () => (
  <React.Fragment>
    <Container>
        <ProgramDescriptions/>
        
        <div className="learnToCodeTextCard"> 
        <h1>Learn to Code</h1>
        <p>You’ll be challenged in this immersive software engineering program. Taught by industry professionals, full time participants will spend 5 days a week and 8 hours a day, Monday – Friday 9:00AM to 4:00PM, and part time participants will spend Monday and Wednesday evenings from 6:30PM  to 9:00PM and Saturdays from 10:00AM to 2:00PM in learning sessions, coding time, and self-study. All times are Eastern Standard Time. </p>
        <p> When you have finished our curriculum, you will have learned enough to launch a career in software development. We focus on holistic training, and part of our curriculum covers soft skills and personal development. Our curriculum covers everything you will need to know to be a full-stack developer, as well the opportunity to complete an industry certification from Amazon or Microsoft. From programming languages to industry best practices, you will get hands-on experience working with today’s web development tools.</p>
        </div>
        <Row >
            <Col xs={12} lg={6} xl={4} className="programBackImage1">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>Elevate Yourself or Change Your Career</Card.Title>
                        <Card.Text>
                            Employment of computer and information technology occupations is projected to grow 21 percent from 2018 to 2028, much faster than the average for all occupations. These occupations are projected to add about 546,200 new jobs. Demand for these workers will stem from greater emphasis on cloud computing, the collection and storage of big data, and information security.  If you are in a current role that is being disrupted by innovation this is an opportunity to build a career that can sustain innovation growth.  Looking to change careers for whatever reason, Nebula Academy can support you in understanding the skills required to shift into new growing opportunities.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={6} xl={4} className="programBackImage2">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>Career Preparation</Card.Title>
                        <p>It can be daunting to participate in an accelerated technology learning program, something that we at Nebula Academy understand well. Many of our participants are balancing school, work, home lives, and other responsibilities, on top of spending 30+ hours a week gaining critical tech skills through our boot camp programs.</p>
                        <p>We often hear that these learning experiences are the most challenging–and rewarding–of people’s lives. If you’ve decided to enroll in a Nebula Academy program, know that our team is dedicated to your success in gaining employment and building a sustainable career for you and your family.</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={12} xl={4} className="programBackImage3">
                <Card className="overImage">
                    <Card.Body>
                        <Card.Title>Coding Basics</Card.Title>
                        <Card.Text>
                            We believe in elevating students from passion and interest to full employment. What this means is that we do not require any coding experience. Many other programs will require students to learn on their own beforehand but we believe in teaching from the basics to full projects & deployment. However if you'd like to practice and get ahead of the crowd take a look at some of the following resources:
                        </Card.Text>
                        <ul>
                            <li><a className="linkLight" href="https://www.youtube.com/watch?v=bupWPZdXqIA">Starting up an HTML file.</a></li>
                            <li><a className="linkLight" href="https://flexboxfroggy.com/">Structuring web pages game.</a></li>
                            <li><a className="linkLight" href="https://www.w3schools.com/js/js_intro.asp">W3's introduction to JavaScript.</a></li>
                            <li><a className="linkLight" href="https://www.youtube.com/watch?v=GTWrWM1UsnA">The Coding Train's JavaScript Tic Tac Toe.</a></li>
                            <li><a className="linkLight" href="https://www.youtube.com/watch?v=Ukg_U3CnJWI">What is JavaScript?</a></li>
                            <li><a className="linkLight" href="https://www.youtube.com/playlist?list=PLM_i0obccy3uiITMEb7PUlzgIFlxq9fvv">JavaScript for beginners.</a></li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  </React.Fragment>
)
