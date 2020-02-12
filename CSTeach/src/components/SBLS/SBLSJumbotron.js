import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './SBLSJumbotron.css'

export const SBLSJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="SBLSJumbotron">
      <div className="SBLSOverlay"></div>
      <Container>
        <h1 className="jumboText">Computer Science Teaching Certification</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)