import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './HomeContent.css';
import CurriculumContent from '../Curriculum/CurriculumContent';
import { CourseContent } from '../Courses/CourseContent';

export const HomeContent = () => (
    <React.Fragment>
        <Container>
            <Row className="programBenefitsRow">
              <div className="margin-left margin-bottom">
                <CourseContent/> 
              </div>   
            </Row>
            <Row>
                <Col xs={12} lg={6} xl={4} className="introRow1Column1">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>There is a growing demand for AWS Cloud literate employees</Card.Title>
                            <Card.Text>
                                The AWS Academy Cloud Foundations teaches overall understanding of cloud computing concepts, independent of specific technical roles.
                            </Card.Text>
                            <Row className="contentCentered" >
                                <Col>
                                    
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6} xl={4} className="introRow1Column2">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>29% of IT decision-makers say they have trouble finding candidates with cloud computing skills.</Card.Title>
                            <p>Quick Read: <a className="linkWhite" target="blank" href="https://aws.amazon.com/blogs/publicsector/a-commitment-to-training-learning-pathways-to-real-world-jobs-with-aws-educate/">Unlock a world of opportunities with your AWS Cloud Literacy skills.</a></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={12} xl={4} className="introRow1Column3">
                    <Card className="introRowTile">
                        <Card.Body>
                            <Card.Title>Is an AWS Certification Important to Your Career?</Card.Title>
                            <p>AWS certification training has increased the salaries for the average certified professional by as much as 25.9%.</p>
                            <p>Source: <a className="linkLight" target="blank" href="http://techgenix.com/aws-certification/">TechGenix Editorial</a></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12} xl={8} className="introRow2Tile1">
                    <Row className="overImage">
                        <Col xl={6}>
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>Curriculum</Card.Title>
                                    <Card.Text>
                                    Demonstrate your knowledge and showcase the skills you mastered with Nebula Academy by pursuing an AWS Certification. Nebula Academy students receive one free practice exam and a 50% discount on the AWS Certification exam.
                                    </Card.Text>
                                    <a href="/curriculum" className="linkLight">Click here to read more about curriculum.</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} >
                            <Card className="introRowTile">
                                <Card.Body>
                                    <Card.Title>Job Placement</Card.Title>
                                    <Card.Text>
                                    Nebula Academy prepares you to enter the workforce as a qualified job candidate. The hands-on, real-world learning approach gives you the practical knowledge and skills needed to show what you know in an interview.
                                    </Card.Text>
                                    <a href="/Outcomes" className="linkLight">Click here to read more about job readiness.</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className="introRow2tile3" xs={12} lg={12} xl={4}>
                    <Card className="introRowTile">
                        <Card.Body className="homeCard5">
                            <br/>
                            <h4 className="centralText">The average salary of an AWS-certified IT professional is $129,868 - ranking as one of the highest-paying certification categories in North America.</h4>
                            <h4 className="centralText">AWS Certifications Increase Tech Pay Up To $12K a year.</h4>
                            <p className="centralText">Source:&nbsp;
                                <a className="linkWhite centralText" target="empty" href="https://www.forbes.com/sites/louiscolumbus/2019/07/28/aws-certifications-increase-tech-pay-up-to-12k-a-year/#6d60d68d189c">Forbes</a>
                            </p>
                            <br/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} className="introRow3Tile1">
                    <Card className="introRowTile">
                        <Card.Body className="overImage">
                            <Card.Title>Support</Card.Title>
                            <Card.Text>
                            Building a career in today's modern workforce is challenging, and sometimes it can be overwhelming to move through change. Our team of on-site and online personnel are there to help everyone be successful. From teamwork to coaching, Nebula Academy programs teach more than just tech skills. We equip participants with the ability to think critically, think computationally, build strong problem-solving skills, how to overcome adversity, and to build confidence in entering careers in a modern workforce. Learn about our support system and how you can begin your journey to build a sustainable career in technology.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} className="introRow3Tile2">
                    <Card className="introRowTile">
                        <Card.Body className="overImage">
                            <Card.Title>More Info</Card.Title>
                            <Card.Text>
                                As you navigate our website we have included details regarding the overall program, what to expect from the experience, the learning outcomes, how to participate if you meet scholarship requirements, how we support you after the program to transition into a job, and how we will support your continued success post job placement. If you have additional questions that we have not answered please reach out to our team at <a className="linkLight" href="mailto:succeed@nebulaacademyny.com">succeed@nebulaacademyny.com</a>.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>    
        <div className="margin-left margin-top">
            <CurriculumContent/>
        </div> 
        </Container>      
    </React.Fragment>
)