import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ProgramJumbotron.css'

export const ProgramJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="programJumbotron">
      <Container>
        <h1 className="jumboText">Program</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

