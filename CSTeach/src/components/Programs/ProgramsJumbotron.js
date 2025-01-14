import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ProgramsJumbotron.css'

export const ProgramsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="programsJumbotron">
      <div className="programOverlay"></div>
      <Container className="jumboContainer">
        <h1 className="jumboText">Programs</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

