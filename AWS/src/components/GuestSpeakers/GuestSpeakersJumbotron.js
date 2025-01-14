import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './GuestSpeakersJumbotron.css'

export const GuestSpeakersJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="guestSpeakersJumbotron">
      <Container>
        <h1 className="jumboText">Guest Speakers</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
)