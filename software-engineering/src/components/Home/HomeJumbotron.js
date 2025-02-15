import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './HomeJumbotron.css'

export const HomeJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="homeJumbo">
      <div className="homeOverlay"></div>
      <Container>
        <h1 className="jumboText">Software Engineering Bootcamp</h1>
        <h4>Empowering you to change your life and your career.</h4>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 