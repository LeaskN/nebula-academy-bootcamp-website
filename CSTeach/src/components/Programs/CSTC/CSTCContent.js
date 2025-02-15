import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './CSTCContent.css'
import prices from '../../../assets/ProgramCost.png'
import micro from '../../../assets/micro.png'
import tello from '../../../assets/tello.png'
import surface from '../../../assets/surface.png'
import CLD21 from '../../../assets/21CLDinfo.png'

class CSTCContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        },
    };
    button1 = () => {
        this.setState({ toggle: {button1: true, button2: false, button3: false, button4: false, button5: false, button6: false, } })
    }
    button2 = () => {
        this.setState({ toggle: {button1: false, button2: true, button3: false, button4: false, button5: false, button6: false, } })
    }
    button3 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: true, button4: false, button5: false, button6: false, } })
    }
    button4 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: true, button5: false, button6: false, } })
    }
    button5 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: false, button5: true, button6: false, } })
    }
    button6 = () => {
        this.setState({ toggle: {button1: false, button2: false, button3: false, button4: false, button5: false, button6: true, } })
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <p>Through our Computer Science Certification, we help new and existing teachers become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning.</p>
                    <Row className="staticCard">
                        <Col xs={4} className="cardColumns">
                            <Card className="cardDeckLeft">
                                    <Card.Body className="noPadding">
                                        <Card.Title 
                                            onClick={() => this.button1()} 
                                            className={this.state.toggle.button1 ? " subtleButton toggled" : "subtleButton"}>
                                            Program Description
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button2()} 
                                            className={this.state.toggle.button2 ? " subtleButton toggled" : "subtleButton"}>
                                            Program Objectives
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button3()}
                                            className={this.state.toggle.button3 ? " subtleButton toggled" : "subtleButton"}>
                                            5 Computer Science Concepts
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button4()}
                                            className={this.state.toggle.button4 ? " subtleButton toggled" : "subtleButton"}>
                                            Modules
                                            </Card.Title>
                                        <hr className="noMargin"/>
                                        <Card.Title 
                                            onClick={() => this.button6()}
                                            className={this.state.toggle.button6 ? " subtleButton toggled" : "subtleButton"}>
                                            21<sup>st</sup> Century Learning Design
                                        </Card.Title>
                                        <Card.Title 
                                            onClick={() => this.button5()}
                                            className={this.state.toggle.button5 ? " subtleButton toggled" : "subtleButton"}>
                                            Certification
                                        </Card.Title>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={8} className="cardColumns offWhite">
                            {this.state.toggle.button1 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1 className="cstH1">Program Description:</h1>
                                            <Row>
                                                <Col xs={10}md={12}>
                                                    Through our Computer Science Certification, we help students and teachers become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning. 
                                                </Col>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button2 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                        <h1 className="cstH1">Program Objectives:</h1>
                                        <Row>
                                                <p className="cstText">The 4-week certification begins with the 5-day STEAM Coach Certification, and continues for 3 weeks with Computer Science framework, based on the NYS Board of Regents to earn a Computer Science Certificate in the classroom teaching service. </p>
                                                <p className="cstText">Candidates will complete 4 weeks of coursework in computer science that addresses the following five Computer Science concepts: 1) algorithms and programming, 2) computing systems, 3) data and analysis, 4) impacts of computer, and 5) networks and the internet. Candidates will also learn the American Disabilities Act (ADA) website accessibility compliance requirements and how to code for accessibility. Furthermore, candidates will learn and understand how computers can be used in educational settings to meet the needs of all learners, including those with learning differences.</p>
                                        </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button3 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                    <h3 className="cstH3">Algorithms and Programming</h3>
                                    <p className="cstText">An algorithm is a sequence of steps designed to accomplish a specific task. Algorithms are translated into programs, or code, to provide instructions for computing devices. Algorithms and programming control all computing systems, empowering people to communicate with the world in new ways and solve compelling problems. The development process to create meaningful and efficient programs involves choosing which information to use and how to process and store it, breaking apart large problems into smaller ones, recombining existing solutions, and analyzing different solutions.</p>
                                    <h3 className="cstH3">Computing Systems</h3>
                                    <p className="cstText">People interact with a wide variety of computing devices that collect, store, analyze, and act upon information in ways that can affect human capabilities both positively and negatively. The physical components (hardware) and instructions (software) that make up a computing system communicate and process information in digital form. An understanding of hardware and software is useful when troubleshooting a computing system that does not work as intended.</p>
                                    <h3 className="cstH3">Data and Analysis</h3>
                                    <p className="cstText">Computing systems exist to process data. The amount of digital data generated in the world is rapidly expanding, so the need to process data effectively is increasingly important. Data is collected and stored so that it can be analyzed to better understand the world and make more accurate predictions.</p>
                                    <h3 className="cstH3">Impacts of Computing</h3>
                                    <p className="cstText">Computing affects many aspects of the world in both positive and negative ways at local, national, and global levels. Individuals and communities influence computing through their behaviors and cultural and social interactions, and in turn, computing influences new cultural practices. An informed and responsible person should understand the social implications of the digital world, including equity and access to computing. </p>
                                    <h3 className="cstH3">Networks and the Internet</h3>
                                    <p className="cstText">Computing devices typically do not operate in isolation. Networks connect computing devices to share information and resources and are an increasingly integral part of computing. Networks and communication systems provide greater connectivity in the computing world by providing fast, secure communication and facilitating innovation.</p>
                                </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button4 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1 className="cstH1">Modules</h1>
                                                <p className="cstText"><b>Modules 1-16:</b> STEAM Coach Certification</p>
                                                <p className="cstText"><b>Module 17:</b> File navigation and manipulation through terminal</p>
                                                <p className="cstText"><b>Module 18:</b> Neuroscience Foundation</p>
                                                <p className="cstText"><b>Module 19:</b> JTML & CSS</p>
                                                <p className="cstText"><b>Module 20:</b> Deployment of static sites</p>
                                                <p className="cstText"><b>Module 21:</b> Git & GitHub</p>
                                                <p className="cstText"><b>Module 22:</b> Algorithms & Programming</p>
                                                <p className="cstText"><b>Module 23:</b> Computer Systems</p>
                                                <p className="cstText"><b>Module 24:</b> Data & Analysis</p>
                                                <p className="cstText"><b>Module 25:</b> JavaScript</p>
                                                <p className="cstText"><b>Module 26:</b> DOM Manipulation</p>
                                                <p className="cstText"><b>Module 27:</b> Event Listeners</p>
                                                <p className="cstText"><b>Module 28:</b> Reading & writing data to local storage</p>
                                                <p className="cstText"><b>Module 29:</b> Impacts of Computing</p>
                                                <p className="cstText"><b>Module 30:</b> Introduction to Python</p>
                                                <p className="cstText"><b>Module 31:</b> CAP Stone Development Project</p>
                                                <p className="cstText"><b>Module 32:</b> Final Presentations</p>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button6 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <Row>
                                                <img alt="21CLD_Information" style={{width:'100%'}} src={CLD21}></img>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                            {this.state.toggle.button5 ? <Card className="cardDeckRight">
                                    <Card.Body>
                                            <h1 className="cstH1">Certification</h1>
                                            <Row>
                                                <p className="cstText">Participants will earn a Computer Science Teaching Certification, as well as CTLE credits is applicable. </p>
                                            </Row>
                                    </Card.Body>
                            </Card>: null}
                        </Col>
                    </Row>
                    <Row  style={{justifyContent: 'center'}}>
                        <img className="staticCard" width="80%" src={prices}  alt="prices"></img>
                    </Row>
                    <h1 id="cstH1-Label">Optional STEAM Coach Kit:</h1>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="surface" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={surface}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Microsoft Surface Go</b></h3>
                        <p>64GB / Intel 4415Y / 4GB RAM / WiFi</p>
                        <p>New Surface Go is perfect for all your daily tasks, giving you laptop performance, tablet portability, and  a stunning touchscreen with the power of Windows 10 Home in S mode. Surface Go Signature Type Keyboard included.</p>
                        </Col>
                    </Row>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="tello" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={tello}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Tello Drone</b></h3>
                        <p>14-Core processor / Collision Detection / Propeller Protection / 80 Grams / Image Stabilization / 5 MP Photos / 13 min flight time / 100m Image Transmission Distance / 720p HD Transmission /Tello App / Controller / Smartphone VR Compatibility</p>
                        <p>Perform flying stunts, shoot quick videos with EZ Shots, and learn about drones with coding education. Get yourself a Tello to find out just how awesome flying a drone can be!</p>
                        </Col>
                    </Row>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="micro" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={micro}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>BBC’s Micro:bit</b></h3>
                        <p>52.0mm x 43.0mm x 11.0mm / 2.0" x 1.7" x 0.4" / Product Weight: 9.0g / 0.3oz / accelerometer / compass / processor / radio & Bluetooth antenna / battery socket / 2 0 pin edge connector / USB connector / LED lights</p>
                        <p>Designed specifically for kids and beginners, the Micro:bit is a pocket-sized computer that you can code, customize and control to bring your digital ideas, games and apps to life!</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CSTCContent;
